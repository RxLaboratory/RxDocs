#!/bin/bash

for dir in src-*/; do
    cd "$dir"
    if test -a build_doc.sh; then
	    ./build_doc.sh
    fi
    cd ..
done

echo "Built all docs."