====
util
====

Scripts
=======

generate_padded_javascript_test_object.py
-----------------------------------------

Creates a JavaScript test object, padded to the desired number of kilobytes.

Example::

    $ util/generate_padded_javascript_test_object.py --length 2 --prefix r15lgc- --output-dir /tmp
    Namespace(length=2, output_dir='/tmp', prefix='r15lgc-', units='kilobytes')
    Template length: 174
    Minus 6 extra placeholder and escape characters
    Padding length: 1880
    Output length: 2048 bytes
    File written to: /tmp/r15lgc-2KB.js

To generate file of a specific byte count, specify the --units argument::

    $ util/generate_padded_javascript_test_object.py --length 1448 --prefix r15lgc- --output-dir /tmp --units bytes
    Namespace(length=1448, output_dir='/tmp', prefix='r15lgc-', units='bytes')
    Template length: 174
    Minus 6 extra placeholder and escape characters
    Padding length: 1280
    Output length: 1448 bytes
    File written to: /tmp/r15lgc-1448B.js
