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
based on Unicode `code point ranges <common/padding.py#L18>`_ found in the script, currently over 2000
characters long, but easily extended.  The larger the alphabet, the easier it
is for the script to produce a result.

To produce the string, the script iterates over its alphabet repeatedly and appends
the current character if it would produce a string with no repeated reversible
sequences of a certain width (referred to as the "window" size).  It continues
until it has produced a string of the length chosen by the user.

This script takes 2 required arguments:

- --length/-l
- --window/-w

It writes the result to a file in the computer's temporary files directory which,
if satisfactory, the user should manually copy to the pyutil/resources directory
and rename with the appropriate character count.  The character count can be
verified with the wc command using the -m switch, e.g.::

    $ wc -m pyutil/resources/padding-200K.txt 
    200000 pyutil/resources/padding-200K.txt

There is currently only a 200K character padding file because that's all we
need to create test objects <= 100KB in size.  It was created using a window
of 2.  If we need larger large test objects, then it may be necessary to create
larger padding files, which may require a larger alphabet and/or window.  The
script will tell you if there is no solution given the current parameters.

+------------------+-----------------------+------------------------+
| Name             | Window                | Used By                |
+==================+=======================+========================+
| padding-200K.txt | 2                     | - r16-100KB.min.js     |
|                  |                       | - r16-15KB.min.js      |
|                  |                       | - r16-2KB.min.js       |
+------------------+-----------------------+------------------------+

Test Objects
------------

Test objects are produced using the pyutil/make_test_objects.py script.  The script
specifies which compressed file sizes to produce, as well as which padding file to
draw from and what padding start size to use.  The padding start size is tuned
to make the script run as fast as possible.  Since it creates new test files iteratively
and downloads them to test the size, the script can take a while to run if the padding
start size isn't pretty close to the amount needed.  But be careful that the padding
start size isn't greater than the amount needed, or else the script will run *forever*.

For each target file size, the script produces two files.  One where the target size
matches the download size when requested of nginx with "Accept-Encoding: gzip, deflate",
and one where the target size matches the download size when no Accept-Encoding header
is sent.  The latter is known as the "identity" file.

Verbosity
---------

Both scripts accept a -v switch to indicate how much detail to show in the screen
output.  Specify multiple times for greater verbosity.
