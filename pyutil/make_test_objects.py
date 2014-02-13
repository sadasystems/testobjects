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
import urllib.request

logger = logging.getLogger(__name__)

import common
import common.errors

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
    arg_parser.add_argument('--test-domain', '-t', default='testobjects.cedexis.localhost')
    arg_parser.add_argument(
        '--verbose',
        '-v',
        action='count',
        default=0,
        help='Verbosity level; you can specify up to 3 times for increasing detail'
    )
    args = arg_parser.parse_args()
    common.configure_logging(args.verbose)

    root_dir = common.get_test_objects_dir('r16')
    if not args.output_dir is None:
        root_dir = args.output_dir

    # `multiple` are multiples of 1024
    file_sizes = [
        None,
        {
            'multiple': 2,
            'padding_file': 'padding-200K.txt',
            'requests': [
                {
                    'compression_type': 'identity',
                    'padding_start_size': int(9.35e2),
                },
                {
                    'compression_type': 'gzip',
                    'padding_start_size': int(1.145e3),
                },
            ]
        },
        {
            'multiple': 15,
            'padding_file': 'padding-200K.txt',
            'requests': [
                {
                    'compression_type': 'identity',
                    'padding_start_size': int(6.313e3),
                },
                {
                    'compression_type': 'gzip',
                    'padding_start_size': int(8.93e3),
                },
            ]
        },
        {
            'multiple': 100,
            'padding_file': 'padding-200K.txt',
            'requests': [
                {
                    'compression_type': 'identity',
                    'padding_start_size': int(4.2141e4),
                },
                {
                    'compression_type': 'gzip',
                    'padding_start_size': int(6.4728e4),
                },
            ]
        }
    ]

    try:
        for file_size_info in file_sizes:
            if file_size_info is None:
                logger.info('Producing small test object')
                output_file_path = os.path.join(root_dir, 'r16.min.js')
                output = create_output(None)
                with open(output_file_path, 'w') as fp:
                    fp.write(output)
                logger.info('File written to: %s', output_file_path)
            else:

                with open(common.padding_file_path(file_size_info['padding_file'])) as fp:
                    padding = fp.read()

                size_in_bytes = 1024 * file_size_info['multiple']
                for request_info in file_size_info['requests']:
                    output_file_name = 'r16-{}KB.min.js'.format(file_size_info['multiple'])
                    output_subdir = os.path.join(root_dir, request_info['compression_type'])
                    output_file_path = os.path.join(output_subdir, output_file_name)
                    if not os.path.isdir(output_subdir):
                        os.makedirs(output_subdir)
                    if os.path.isfile(output_file_path):
                        os.unlink(output_file_path)
                    logger.info('Producing file: %s', output_file_path)
                    logger.debug('Targeting compressed size: %s', size_in_bytes)
                    compressed_length = 0
                    current_padding_length = request_info['padding_start_size']
                    offset = 0
                    while compressed_length != size_in_bytes:
                        logger.debug('Current padding length: %s', current_padding_length)
                        current_padding = padding[offset:current_padding_length + offset]
                        output = create_output(current_padding)
                        logger.log(5, 'Current output:\n%s', output)

                        # Write the candidate file
                        with open(output_file_path, 'w') as f:
                            f.write(output)

                        # Now download it and make sure it's the right size
                        url = 'http://{}/r16/{}/{}'.format(args.test_domain, request_info['compression_type'], output_file_name)
                        request_headers = {}
                        if 'gzip' == request_info['compression_type']:
                            request_headers['Accept-Encoding'] = 'gzip, deflate'
                        request = urllib.request.Request(url, headers=request_headers)
                        response = urllib.request.urlopen(request)
                        response_text = response.read()
                        logger.debug('Length of response: %s', len(response_text))

                        if len(response_text) < size_in_bytes:
                            current_padding_length += 1
                        elif len(response_text) > size_in_bytes:
                            # We've gone over a bit.
                            # Start over but from 1 character further along
                            current_padding_length = request_info['padding_start_size']
                            offset += 1
                            logger.debug('Unable to arrive at exact file size. Starting over with offset=%s', offset)
                        else:
                            break

                    #output_file = os.path.join(output_dir, compressor.compressor_name)
                    #if not os.path.isdir(output_file):
                    #    os.makedirs(output_file)
                    #output_file = os.path.join(output_file, output_file_name)
                    #with open(output_file, 'w') as fp:
                    #    fp.write(output)
                    #logger.info('File written to: %s', output_file)
    except common.errors.InvalidJavaScriptError as e:
        logger.error('Exception: %r', e)
        raise

if __name__ == '__main__':
    print(sys.version)
    main()