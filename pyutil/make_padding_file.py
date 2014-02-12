#!/usr/bin/env python3

import logging
import tempfile
import argparse

logger = logging.getLogger(__name__)

import common.padding

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--length', '-l', type=lambda x: int(float(x)), required=True, help='The length in bytes of the desired padding')
    parser.add_argument('--window', '-w', type=int, required=True, help='The maximum number of characters checked for repeated sequences')
    parser.add_argument('--verbose', '-v', action='count', default=0, help='Verbosity level; you can specify up to 3 times for increasing detail')
    args = parser.parse_args()
    print(args)
    common.configure_logging(args.verbose)
    padding = common.padding.create(args.length, args.window)
    logger.log(15, 'Got padding: %s', padding)

    tempfile_handle, tempfile_path = tempfile.mkstemp(suffix='.txt', prefix='tmp-padding-')
    with open(tempfile_path, 'w') as fp:
        fp.write(padding)

    logger.info('Written to: %s', tempfile_path)

if __name__ == '__main__':
    main()
