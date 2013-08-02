#!/bin/bash
for i in $@; do gzip -9 -v -c $i > $i.gz; done
