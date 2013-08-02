#!/bin/bash
for i in $@; do gzip -9 -v -f -c $i > $i.gz; done
