

import logging
import tempfile
import os
import subprocess

logger = logging.getLogger(__name__)

class Compressor(object):

    def __init__(self, compressor_name, get_compressed_length_fn):
        self.__compressor_name = compressor_name
        self.__get_compressed_length_fn = get_compressed_length_fn

    @property
    def compressor_name(self):
        return self.__compressor_name

    def get_compressed_length(self, value, filename):
        return self.__get_compressed_length_fn(value, filename)

def get_compressed_length_identity(value, filename):
    tempfile_path = os.path.join(tempfile.gettempdir(), filename)
    try:
        with open(tempfile_path, 'w') as f:
            f.write(value)
        return os.path.getsize(tempfile_path)
    finally:
        os.unlink(tempfile_path)

def get_compressed_length_gzip(value, filename):
    tempfile_path = os.path.join(tempfile.gettempdir(), filename)
    tempfile_path_compressed = tempfile_path + '.gz'
    try:
        with open(tempfile_path, 'w') as f:
            f.write(value)
        args = [ 'gzip', '-9', tempfile_path ]
        subprocess.check_call(args)
        return os.path.getsize(tempfile_path_compressed)
    finally:
        os.unlink(tempfile_path_compressed)

gzip_compressor = Compressor('gzip', get_compressed_length_gzip)
identity_compressor = Compressor('identity', get_compressed_length_identity)
