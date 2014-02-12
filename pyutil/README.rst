======
pyutil
======

Generating Large Test Objects
=============================

Padding files
-------------

We maintain a set of files containing hard-to-compress Unicode strings in
pyutil/resources.  They have names like padding-200K.txt, where the number in
the filename indicates how many Unicode characters the file contains.

These are generated using the pyutil/make_padding_file.py script.  This script
constructs an alphabet that it uses to generate the long string.  This is
based on Unicode code point ranges found in the script, currently over 2000
characters long, but easily extended.  The larger the alphabet, the easier it
is for the script to produce a result.

To produce the string, the script iterates over its alphabet repeatedly and appends
the current character if it would produce a string with no repeated reversible
sequences of a certain width (referred to as the "window" size).  It continues
until it has produced a string of the length chosen by the user.

This script takes 2 required arguments: --length/-l and --window/-w.  It writes
the result to a file in the computer's temporary files directory, which, if
satisfactory, the user should manually copy to the pyutil/resources directory
and rename with the appropriate character count.  The character count can be
verified with the wc command using the -m switch, e.g.::

    $ wc -m pyutil/resources/padding-200K.txt 
    200000 pyutil/resources/padding-200K.txt

There is currently only a 200K character padding file because that's all we
need to create test objects <= 100KB in size.  It was created using a window
of 2.  If we need larger large test objects, then it may be necessary to create
larger padding files, which may require larger a alphabet and/or window.

+------------------+-----------------------+--------------------------------+
| Name             | Window                | Used By                        |
+==================+=======================+================================+
| padding-200K.txt | 2                     | - r16lgc-100KB.gzip.min.js     |
|                  |                       | - r16lgc-100KB.identity.min.js |
|                  |                       | - r16lgc-15KB.gzip.min.js      |
|                  |                       | - r16lgc-15KB.identity.min.js  |
|                  |                       | - r16lgc-2KB.gzip.min.js       |
|                  |                       | - r16lgc-2KB.identity.min.js   |
+------------------+-----------------------+--------------------------------+

Test Objects
------------

Test objects are produced using the pyutil/make_test_objects.py script.  The script
specifies which compressed file sizes to produce, as well as which padding file to
draw from and what starting padding size to use.  The starting padding size is tuned
to make the script run as fast as possible.  Since it creates a lot of temporary files
and gzips them to test the size, the script can take a while to run if these aren't
tuned.

For each target file size, the script produces two files.  One where the target size
matches the resulting file after being gzipped at level 9 (because that's what how
we compress them in production), and one where the target size matches the actual file
size (known as the "identity" file).  These are distinguished by filename.  For example,
for the 100KB test object, we have the following two files::

    jacob@sequoia:~/repos/cedexis/testobjects/r16$ ll | grep 100KB
    -rw-r--r--  1 jacob jacob 161024 Feb 12 12:27 r16lgc-100KB.gzip.min.js
    -rw-r--r--  1 jacob jacob 102400 Feb 12 12:27 r16lgc-100KB.identity.min.js

Gzipping the gzip.min.js version produces a file of exactly the right size::

    jacob@sequoia:~/repos/cedexis/testobjects/r16$ gzip -9 r16lgc-100KB.gzip.min.js 
    jacob@sequoia:~/repos/cedexis/testobjects/r16$ ll | grep 100KB.gzip
    -rw-r--r--  1 jacob jacob 102400 Feb 12 12:27 r16lgc-100KB.gzip.min.js.gz

Verbosity
---------

Both scripts accept a -v switch to indicate how much detail to show in the screen
output.  Specify multiple times for greater verbosity.
