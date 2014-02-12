
import os
import logging
import logging.config

logger = logging.getLogger(__name__)

def get_root_dir():
    return os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def get_test_objects_dir(label):
    return os.path.join(get_root_dir(), label)

def get_lib_dir():
    return os.path.join(get_root_dir(), 'lib')

def get_resources_dir():
    return os.path.join(get_root_dir(), 'pyutil/resources')

def jslint4java_path():
    return os.path.join(get_lib_dir(), 'jslint4java-2.0.5.jar')

def yuicompressor_path():
    return os.path.join(get_lib_dir(), 'yuicompressor-2.4.7.jar')

def padding_file_path(filename):
    return os.path.join(get_resources_dir(), filename)

def configure_logging(verbose):

    # Choose the level based upon the `verbose` argument
    level_map = {
        0: 'INFO',
        1: 15,
        2: 10,
        3: 5
    }

    level = level_map.get(verbose, 0)
    config = {
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'standard': {
                'format': '[%(levelname)s] %(name)s: %(message)s'
            },
        },
        'handlers': {
            'default': {
                'level': level,
                'class': 'logging.StreamHandler',
                'formatter': 'standard',
            },
        },
        'loggers': {
            '': {
                'handlers': ['default'],
                'level': level,
                'propagate': True
            },
        }
    }
    logging.config.dictConfig(config)
    logger.info('Verbosity level: %s', logging.getLevelName(logger.getEffectiveLevel()))
