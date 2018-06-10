# Understand Webpack

## Basic Concepts
* Entry: the start point of the bundling process. E.g. `index.js`.
* Output: definitions of how to write generated files to the disk.
* Mode: there are 3 of them `development`, `production` and `none`. Different plugins are enabled in different mode.
* Loader: the tasks transform the input file to another form.
* Plugin: do all the things other than transforming the input files. E.g. copy assets, set environment parameters, etc..

## Basic Example Using Babel

```javascript
'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  // With uglify etc.
  mode: 'production',
  
  // Base path for resolving entry
  context: path.resolve(__dirname, './'),
  
  // Entry point
  entry: './index.js',
  
  // Output files definition
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js'
  },
  
  module: {
    rules: [
      {
        // For all js files
        test: /\.js$/,
        
        // Exclude files in node_modules and webpack.conf.js
        exclude: [/node_modules/, /webpack/],
        
        // Use babel-loader
        loader: 'babel-loader'
      }
    ]
  }
}
```

## Run Webpack

Using `webpack-cli`

```console
$ webpack --config webpack.conf.js
```
