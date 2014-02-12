
import string
import logging
import sys

logger = logging.getLogger(__name__)

import common
import common.errors

def read_alphabet():
    # Read from the alphabet file, which contains one UTF-8 character per line
    #with open(common.alphabet_file_path()) as fp:
    #    source = fp.read()
    #return list(filter(lambda x: 1 == len(x), source.split('\n')))

    # There are certain code points that aren't nicely printable
    include_ranges = [
        ( 0x0021, 0x0021 ),
        ( 0x0023, 0x0026 ),
        ( 0x0028, 0x005B ),
        ( 0x005D, 0x007E ),
        ( 0x00A1, 0x00AC ),
        ( 0x00AE, 0x00FF ),
        ( 0x0100, 0x017F ),
        ( 0x0180, 0x024F ),
        ( 0x2C60, 0x2C7F ),
        ( 0x16A0, 0x16F0 ), # Runic
        ( 0x0370, 0x0377 ), # Greek and Coptic
        ( 0x037A, 0x037E ),
        ( 0x0384, 0x038A ),
        ( 0x038C, 0x038C ),
        ( 0x038E, 0x03A1 ),
        ( 0x03A3, 0x03FF ),
        ( 0x0531, 0x0556 ),
        ( 0x0559, 0x055F ),
        ( 0x0561, 0x0587 ),
        ( 0x0589, 0x058A ),
        ( 0x058F, 0x058F ),
        ( 0xFB13, 0xFB17 ),
        ( 0x0400, 0x04FF ), # Cyrillic
        ( 0x0500, 0x0527 ),
        ( 0x2DE0, 0x2DFF ),
        ( 0xA640, 0xA673 ),
        ( 0xA67C, 0xA697 ),
        ( 0x10A0, 0x10C5 ), # Georgian
        ( 0x10D0, 0x10Fc ),
        ( 0x1200, 0x1248 ), # Ethiopic
        ( 0x124A, 0x124D ),
        ( 0x1250, 0x1256 ),
        ( 0x1258, 0x1258 ),
        ( 0x125A, 0x125D ),
        ( 0x1260, 0x1288 ),
        ( 0x128A, 0x128D ),
        ( 0x1290, 0x12B0 ),
        ( 0x12B2, 0x12B5 ),
        ( 0x12B8, 0x12BE ),
        ( 0x12C0, 0x12C0 ),
        ( 0x12C2, 0x12C5 ),
        ( 0x12C8, 0x12D6 ),
        ( 0x12D8, 0x1310 ),
        ( 0x1312, 0x1315 ),
        ( 0x1318, 0x135A ),
        ( 0x1360, 0x137C ),
        ( 0x1380, 0x1399 ),
        ( 0x2C00, 0x2C21 ), # Glagolitic
        ( 0x2C23, 0x2C2A ),
        ( 0x2C2E, 0x2C2E ),
        ( 0x2C30, 0x2C51 ),
        ( 0x2C53, 0x2C5A ),
        ( 0x2C5E, 0x2C5E ),
        ( 0x2D80, 0x2D96 ), # Ethiopic Extended
        ( 0x2DA0, 0x2DA6 ),
        ( 0x2DA8, 0x2DAE ),
        ( 0x2DB0, 0x2DB6 ),
        ( 0x2DB8, 0x2DBE ),
        ( 0x2DC0, 0x2DC6 ),
        ( 0x2DC8, 0x2DCE ),
        ( 0x2DD0, 0x2DD6 ),
        ( 0x2DD8, 0x2DDE ),
        ( 0x10330, 0x1034A ), # Gothic
        ( 0x07C0, 0x07E7 ), # N'Ko
        ( 0x07F4, 0x07F5 ),
        ( 0x07F8, 0x07FA ),
        ( 0xAB01, 0xAB06 ), # Ethiopic Extended A
        ( 0xAB09, 0xAB0E ),
        ( 0xAB11, 0xAB16 ),
        ( 0xAB20, 0xAB26 ),
        ( 0xAB28, 0xAB2E ),
    ]

    # Generate a list of Unicode characters
    return [ chr(code_point) for current_range in include_ranges for code_point in range(current_range[0], current_range[1] + 1) ]

def create(length, window):
    alphabet = read_alphabet()
    logger.debug('alphabet: %s (length=%s)', alphabet, len(alphabet))
    logger.debug('length: %s', length)
    logger.debug('window: %s', window)
    result = ''

    try:
        while True:
            # Work our way through the alphabet looking for the first character
            # that would not violate the window
            no_solution = True
            for candidate in alphabet:
                candidate_result = result + candidate
                logger.log(5, 'current result: %s', result)
                logger.log(5, 'candidate: %s', candidate)
                logger.log(5, 'candidate result: %s', candidate_result)
    
                if len(candidate_result) <= window:
                    # Until we reach the window width, just keep adding characters
                    result = candidate_result
                    no_solution = False
                    continue
    
                # See if adding the candidate letter would violate the current window
                # Get the last `window` items in the string
                test = candidate_result[-1 * window:]
                logger.log(5, 'test: %s', test)
    
                test_index = candidate_result.find(test)
                logger.log(5, 'test index: %s', test_index)
    
                if test_index < (len(candidate_result) - window):
                    logger.log(5, 'Not adding %s; would cause violation at index %s', candidate, test_index)
                    continue
    
                # Flip it and test again
                test = ''.join(reversed(test))
                logger.log(5, 'test (reversed): %s', test)
                test_index = candidate_result.find(test)
                logger.log(5, 'test index (reversed): %s', test_index)
    
                if -1 < test_index and test_index < (len(candidate_result) - window):
                    logger.log(5, 'Not adding %s; would cause violation at index %s (reversed)', candidate, test_index)
                    continue
        
                # If we get here, then the candidate character is alright
                no_solution = False
                result = candidate_result
                if len(result) >= length:
                    return result
    
                logger.log(5, 'current result: %s', result)
                logger.log(5, 'current length: %s', len(result))
                if 0 == len(result) % 10:
                    logger.log(15, 'current length: %s', len(result))
                elif 0 == len(result) % 1000:
                    logger.info('current length: %s', len(result))

            if no_solution:
                logger.error('There may be no solution given length %s and window size %s', length, window)
                logger.error('Got to result length: %s', len(result))
                return result
    except KeyboardInterrupt:
        logger.error('User interrupted processing')
        logger.error('Got to result length: %s', len(result))
        return result
