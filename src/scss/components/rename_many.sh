#!/bin/bash

# ${var/Pattern/Replacement}

for file in *.css
do
    mv -i "${file}" "${file/.css/.scss}"
done

