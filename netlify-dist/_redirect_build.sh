#!/bin/bash

# Setup the warning
echo "##############################################################" > ./_redirect
echo "# !!! WARNING - this file is generated, do not modify it !!! #" >> ./_redirect
echo "##############################################################" >> ./_redirect
echo "" >> ./_redirect

# Setup the _redirect_base first
cat ./_redirect_base >> ./_redirect

# Input file that is being scanned
INPUT_FILE="./_redirect_v1"

# Lets iterate the lines
while read -r line
do
    if [[ $line =~ ^\#.* ]]; then
        # Lets just pipe the comment line
        echo "$line" >> ./_redirect
    else
        # Extract the original path / redirect path pairs
        line_arr=($(echo "$line" | xargs))
        #echo "${line_arr[0]}"
        #echo "${line_arr[1]}"

        # Only process if not empty
        if [[ ! -z "${line_arr[0]}" ]]; then
            # Lets setup the various paths
            echo "${line_arr[0]}         ${line_arr[1]}    302" >> ./_redirect
            echo "${line_arr[0]}/        ${line_arr[1]}    302" >> ./_redirect
            echo "${line_arr[0]}.html    ${line_arr[1]}    302" >> ./_redirect
        fi
    fi
done < "$INPUT_FILE"