#!/bin/bash

cd ..

cd "src-docs"
echo "Building src-docs..."
./build_doc.sh
cd ..

for dir in src-*/; do
    if test "$dir" != "src-docs/"; then
        cd "$dir"
        echo "Building $dir..."
        if test -a build_doc.sh; then
            ./build_doc.sh
        fi
        cd ..
    fi
done

echo "Built all docs."

read -p "Press any key."