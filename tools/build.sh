#!/bin/bash

# Remove outdated build directory
echo ''
echo '> Removing previous build (if exists)'
yarn rimraf dist
echo ''

# Transpile to TypeScript
echo ''
echo '> Transpilation...'
yarn tsc
echo ''

# Traverse alias paths and replace them
echo ''
echo '> Convert alias paths'
yarn tscpaths \
  -p tsconfig.json \
  -s ./src \
  -o ./dist

# Copy SCSS files
echo ''
echo '> Copying *.scss files to the build'
mkdir dist/scss
cp src/scss/*.scss dist/scss

# Copy Assets
echo ''
echo '> Copying assets files to the build'
mkdir dist/assets
cp -R assets dist