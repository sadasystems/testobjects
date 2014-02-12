#!/usr/bin/env python3

import sys

if sys.hexversion < 0x03030000:
    sys.exit('This module requires Python 3.3+')

import argparse
import tempfile
import os
import subprocess
import re
import logging

logger = logging.getLogger(__name__)

import common
import common.errors
import common.compression

def create_output(padding):

    def find_nth(source, substr, n):
        found = 0
        running_index = 0
        while True:
            index = source.find(substr, running_index)
            running_index += 1 + index
            found += 1
            if (found >= n):
                return index

    expected_error_expressions = [
        "Unused 'a'.",
        "Do not wrap function literals in parens unless they are to be immediately invoked.",
    ]

    js_lines = [
        '/*! Copyright 2014 Cedexis Inc. */',
        '',
        '/*jslint',
        '   sloppy: true',
        '   white: true',
        '   browser: true',
        '*/',
        '',
        '(function() {',
        '   if (undefined !== window.radar) {',
        '       window.radar.stoppedAt = new Date();',
        '   }',
        '}());',
        '',
    ]

    # Add padding
    function_with_padding = [
        '(function() {',
        '    var a = ',
        "    a += 'b';",
        '});',
        '',
    ]
    if not padding is None:
        function_with_padding[1] += "'"
        function_with_padding[1] += padding
        function_with_padding[1] += "';"
        js_lines.extend(function_with_padding)

    result = '\n'.join(js_lines)

    # Run jslint on the output
    tempfile_handle, tempfile_path = tempfile.mkstemp(suffix='.js')
    tempfile_handle_minified, tempfile_path_minified = tempfile.mkstemp(suffix='.min.js')
    try:
        logger.debug('Writing to temp file: %s', tempfile_path)
        with open(tempfile_path, 'w') as f:
            f.write(result)

        args = [
            'java',
            '-jar',
            common.jslint4java_path(),
            tempfile_path
        ]
        proc = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        output, error = proc.communicate()
        if 0 < len(output):
            for current_error in output.decode().strip().split('\n'):
                error_handled = False
                for current_expr in expected_error_expressions:
                    match = re.search(current_expr, current_error)
                    if not match is None:
                        error_handled = True
                        break
                if not error_handled:
                    logger.debug('Current error: %s', current_error)
                    raise common.errors.InvalidJavaScriptError(current_error[1 + find_nth(current_error, ':', 2):])

        args = [
            'java',
            '-jar',
            common.yuicompressor_path(),
            '--type',
            'js',
            '--nomunge',
            '-o',
            tempfile_path_minified,
            tempfile_path,
        ]
        proc = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        output, error = proc.communicate()
        if 0 < len(output):
            for current_error in output.decode().strip().split('\n'):
                logger.info('%s', current_error)

        with open(tempfile_path_minified, 'r') as f:
            return f.read()

    finally:
        os.unlink(tempfile_path)
        os.unlink(tempfile_path_minified)

def main():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('--output-dir', '-d')
    arg_parser.add_argument(
        '--verbose',
        '-v',
        action='count',
        default=0,
        help='Verbosity level; you can specify up to 3 times for increasing detail'
    )
    args = arg_parser.parse_args()
    common.configure_logging(args.verbose)

    output_dir = common.get_test_objects_dir('r16')
    if not args.output_dir is None:
        output_dir = args.output_dir

    # These are multiples of 1024
    # For historical reasons, what we're calling kilobytes here are really
    # kibibytes (i.e. we screwed up historically)
    file_sizes = [
        None,
        {
            'multiple': 2,
            'padding_file': 'padding-200K.txt',
            'compressors': [
                (common.compression.identity_compressor, int(9.35e2)),
                (common.compression.gzip_compressor, int(1.1e3)),
            ]
        },
        {
            'multiple': 15,
            'padding_file': 'padding-200K.txt',
            'compressors': [
                (common.compression.identity_compressor, int(6.313e3)),
                (common.compression.gzip_compressor, int(9.31e3)),
            ]
        },
        {
            'multiple': 100,
            'padding_file': 'padding-200K.txt',
            'compressors': [
                (common.compression.identity_compressor, int(4.214e4)),
                (common.compression.gzip_compressor, int(6.629e4)),
            ]
        }
    ]

    try:
        for file_size_info in file_sizes:
            if file_size_info is None:
                logger.info('Producing small test object')
                output_file = os.path.join(output_dir, 'r16lgc.min.js')
                output = create_output(None)
                with open(output_file, 'w') as fp:
                    fp.write(output)
                logger.info('File written to: %s', output_file)
            else:

                with open(common.padding_file_path(file_size_info['padding_file'])) as fp:
                    padding = fp.read()

                size_in_bytes = 1024 * file_size_info['multiple']
                for compressor, starting_padding_size in file_size_info['compressors']:
                    output_file_name = 'r16lgc-{}KB.{}.min.js'.format(file_size_info['multiple'], compressor.compressor_name)
                    logger.info('Producing file: %s', output_file_name)
                    logger.debug('Targeting compressed size: %s', size_in_bytes)
                    compressed_length = 0
                    current_padding_length = starting_padding_size
                    offset = 0
                    while compressed_length != size_in_bytes:
                        logger.debug('Current padding length: %s', current_padding_length)
                        current_padding = padding[offset:current_padding_length + offset]
                        output = create_output(current_padding)
                        logger.log(5, 'Current output:\n%s', output)
                        compressed_length = compressor.get_compressed_length(output, output_file_name)
                        logger.debug('Compressed length: %s', compressed_length)

                        if compressed_length < size_in_bytes:
                            current_padding_length += 1
                        elif compressed_length > size_in_bytes:
                            # We've gone over a bit.
                            # Start over but from 1 character further along
                            current_padding_length = starting_padding_size
                            offset += 1
                            logger.debug('Unable to arrive at exact file size. Starting over with offset=%s', offset)

                    output_file = os.path.join(output_dir, output_file_name)
                    with open(output_file, 'w') as fp:
                        fp.write(output)
                    logger.info('File written to: %s', output_file)
    except common.errors.InvalidJavaScriptError as e:
        logger.error('Exception: %r', e)

if __name__ == '__main__':
    print(sys.version)
    main()
