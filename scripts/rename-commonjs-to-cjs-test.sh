#!/bin/bash

echo "Updating .js files..."
for file in ./tests/dist/cjs/tests/cases/**/*.spec.js; do
  echo "Updating $file contents..."
  # Use in-place edit correctly for both Linux and macOS
  if [[ "$OSTYPE" != "darwin"* ]]; then
    sed -i "s/\.js'/\.cjs'/g" "$file"    # Linux
  fi
  echo "Renaming $file to ${file%.js}.cjs..."
  mv "$file" "${file%.js}.cjs"
done
echo

# echo "Updating .d.ts files..."
# for file in ./dist/tests/cjs/*.d.ts; do
#   echo "Updating $file contents..."
#   # Use in-place edit correctly for both Linux and macOS
#   if [[ "$OSTYPE" != "darwin"* ]]; then
#     sed -i "s/\.js'/\.cjs'/g" "$file"    # Linux
#   fi
#   echo "Renaming $file to ${file%.d.ts}.d.cts..."
#   mv "$file" "${file%.d.ts}.d.cts"
# done
