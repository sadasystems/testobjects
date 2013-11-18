====
util
====

Scripts
=======

generate_padded_javascript_test_object.py
-----------------------------------------

Creates a JavaScript test object, padded to the desired number of kilobytes.

Example::

    ./generate_padded_javascript_test_object.py --length 2 --output-dir /tmp
    Namespace(length=2, output_dir='/tmp', prefix='r15lgc-')
    Template length: 174
    Minus 6 extra placeholder and escape characters
    Padding length: 1880
    Output length: 2048 bytes
    File written to: /tmp/r15lgc-2KB.js
