import argparse
from pprint import pprint
import os
from os.path import dirname, abspath, join
import shutil

providers = [
    '14',
    '17',
    '18',
    '19',
    '20',
    '22',
    '24',
    '25',
    '32',
    '33',
    '35',
    '36',
    '61',
    '64',
    '85',
    '90',
    '102',
    '107',
    '108',
    '110',
    '111',
    '112',
    '126',
    '168',
    '213',
    '249',
    '275',
    '276',
    '281',
    '284',
    '287',
    '292',
    '359',
    '360',
    '361',
    '370',
    '373',
    'cb',
]

def create_new_directory(dirpath):
    os.mkdir(dirpath)
    
    root_dir = dirname(dirname(abspath(__file__)))
    source_file = join(root_dir, 'r14/cdx.html')
    target_file = join(dirpath, 'cdx.html')
    shutil.copyfile(source_file, target_file)
    source_file = join(root_dir, 'r14/cdxl.html')
    target_file = join(dirpath, 'cdxl.html')
    shutil.copyfile(source_file, target_file)
    
    os.chdir(dirpath)
    
    for i in providers:
        target_link = 'r14_{}.html'.format(i)
        os.symlink('cdx.html', target_link)
        target_link = 'r14_{}_xl.html'.format(i)
        os.symlink('cdxl.html', target_link)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d',
        '--dirname',
        help='The name of the new directory to create. Must not already exist.',
        required=True)
    args = parser.parse_args()
    
    root_dir = dirname(dirname(abspath(__file__)))
    path_to_new_dir = os.path.join(root_dir, args.dirname)
    
    if os.path.exists(path_to_new_dir):
        print('The directory {} already exists. Please verify this is the directory'\
              ' you wish to use.  If so, please delete it manually and try again.'.format(path_to_new_dir))
    else:
        print('Creating {}'.format(path_to_new_dir))
        create_new_directory(path_to_new_dir)