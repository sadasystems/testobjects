scripts README.rst
==================

create_radar_directory.py
-------------------------

Creates a new directory and copies cdx.html and cdxl.html from r14/.  Creates symbolic
links to these using an array of provider ids, located at the top of the script.

To create a new Radar file directory::

    python create_radar_directory.py --dirname <new directory name>