#!/bin/bash

echo "Updating .js files..."
for file in ./dist/cjs/*.js; do
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
# for file in ./dist/cjs/*.d.ts; do
#   echo "Updating $file contents..."
#   # Use in-place edit correctly for both Linux and macOS
#   if [[ "$OSTYPE" != "darwin"* ]]; then
#     sed -i "s/\.js'/\.cjs'/g" "$file"    # Linux
#   fi
#   echo "Renaming $file to ${file%.d.ts}.d.mts..."
#   mv "$file" "${file%.d.ts}.d.ts"
# done
