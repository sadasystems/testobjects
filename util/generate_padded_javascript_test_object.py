#!/usr/bin/env python3

import argparse
import tempfile
import os
import random
import string

template = """/* Copyright 2013 Cedexis Inc.

{}

*/

(function() {{
    var s = new Date();
    if ('object' === typeof window.radar) {{
        window.radar.stoppedAt = s;
    }}
}})();
"""

def main():
    arg_parser = argparse.ArgumentParser()

    arg_parser.add_argument('--length', '-l', type=int, required=True, help='Resulting file length in kilobytes')
    arg_parser.add_argument('--units', '-u', choices=['kilobytes', 'bytes'], default='kilobytes')
    arg_parser.add_argument('--output-dir', '-d', default=tempfile.gettempdir())
    arg_parser.add_argument('--prefix', '-p', default='r15lgc-')

    args = arg_parser.parse_args()
    print(args)

    file_length_in_bytes = args.length * 1024
    output_file = '{}{}KB.js'.format(args.prefix, args.length)

    if 'bytes' == args.units:
        file_length_in_bytes = args.length
        output_file = '{}{}B.js'.format(args.prefix, args.length)

    output_file = os.path.join(args.output_dir, output_file)
    template_length = len(template)
    print('Template length:', template_length)
    # Add 2 for the placeholders and 4 for the extra brackets
    padding_length = file_length_in_bytes - template_length + 6
    print('Minus 6 extra placeholder and escape characters')
    print('Padding length:', padding_length)
    alphabet = string.ascii_letters + string.digits
    padding = ''.join(random.choice(alphabet) for i in range(padding_length))
    output = template.format(padding)
    output_length = len(output)
    print('Output length:', output_length, 'bytes')
    with open(output_file, 'w') as fp:
        fp.write(output)

    print('File written to:', output_file)

if __name__ == '__main__':
    main()
