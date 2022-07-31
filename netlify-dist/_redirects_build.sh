#!/bin/bash

# Setup the warning
echo "##############################################################" >  ./_redirects
echo "# !!! WARNING - this file is generated, do not modify it !!! #" >> ./_redirects
echo "##############################################################" >> ./_redirects
echo "" >> ./_redirects

# Setup the _redirects_base first
cat ./_redirects_base >> ./_redirects

# Input file that is being scanned
INPUT_FILE="./_redirects_v1"

# Lets iterate the lines
while read -r line
do
    if [[ $line =~ ^\#.* ]]; then
        # Lets just pipe the comment line
        echo "$line" >> ./_redirects
    else
        # Extract the original path / redirect path pairs
        line_arr=($(echo "$line" | xargs))
        #echo "${line_arr[0]}"
        #echo "${line_arr[1]}"

        # Only process if not empty
        if [[ ! -z "${line_arr[0]}" ]]; then
            # Lets setup the various paths
            echo "${line_arr[0]}         ${line_arr[1]}    302" >> ./_redirects
            echo "${line_arr[0]}/        ${line_arr[1]}    302" >> ./_redirects
            echo "${line_arr[0]}.html    ${line_arr[1]}    302" >> ./_redirects
        fi
    fi
done < "$INPUT_FILE"