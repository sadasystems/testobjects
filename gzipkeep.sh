#!/bin/bash
#
# Used to create gzipped versions of files while
# preserving the original

for i in $@; do gzip -9 -v -f -c $i > $i.gz; done
