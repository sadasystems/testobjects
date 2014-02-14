

import logging
import tempfile
import os
import subprocess
import shutil

logger = logging.getLogger(__name__)

class Compressor(object):

    def __init__(self, compressor_name, generate_compressed_file_fn):
        self.__compressor_name = compressor_name
        self.__generate_compressed_file_fn = generate_compressed_file_fn

    @property
    def compressor_name(self):
        return self.__compressor_name

    def generate_compressed_file(self, content, target_dir, source_file_name):
        return self.__generate_compressed_file_fn(content, target_dir, source_file_name)

def generate_compressed_identity(content, target_dir, source_file_name):
    # For identity, we just write the file without compression
    output_file_path = os.path.join(target_dir, source_file_name)
    with open(output_file_path, 'w') as f:
        f.write(content)

def generate_compressed_gzip(content, target_dir, source_file_name):
    # Produce a gzipped file and move it to output_file_path
    tempfile_path = os.path.join(tempfile.gettempdir(), source_file_name)
    tempfile_path_compressed = tempfile_path + '.gz'
    with open(tempfile_path, 'w') as f:
        f.write(content)
    subprocess.check_call([ 'gzip', '-f', '-n', tempfile_path ])
    output_file_path = os.path.join(target_dir, os.path.basename(tempfile_path_compressed))
    if os.path.exists(output_file_path):
        os.unlink(output_file_path)
    shutil.move(tempfile_path_compressed, target_dir)

identity_compressor = Compressor('identity', generate_compressed_identity)
gzip_compressor = Compressor('gzip', generate_compressed_gzip)
