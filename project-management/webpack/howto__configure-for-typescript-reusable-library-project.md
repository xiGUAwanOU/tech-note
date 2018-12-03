# Configure for TypeScript Reusable Library Project
This instruction is for creating a reusable library project written in TypeScript with Webpack.

## Firstly create a new npm project

```shell
$ mkdir webpack-typescript-demo
$ cd webpack-typescript-demo
$ npm init -y
$ npm install webpack webpack-cli --save-dev
```

## Then install the TypeScript dependencies

```shell
$ npm install --save-dev typescript ts-loader
```

## Configure the TypeScript compiler

```javascript
// Content of "tsconfig.json" file:
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,

    // Language specification version of the import syntax:
    "module": "es6",
    // Language specification version of the generated code:
    "target": "es5",

    "alwaysStrict": true,
    "allowJs": true
  }
}
```

This configuration file is only an example, modify it according to the [official handbook of TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

## Configure Webpack

```javascript
// Content of "webpack.config.js" file:
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-typescript-demo.js',

    // Respect defaults if it is defined as default in the source code:
    libraryExport: 'default',

    // Generated code will be like: module.exports = ...;
    libraryTarget: 'commonjs2'
  }
};
```

## Configure build command and build

```javascript
// Content in the "package.json" file:
{
  "scripts": {
    "build": "webpack",
    // ... ...
  },
  // ... ...
}
```

```shell
$ npm run build
```

Now in the `./dist` directory, we can find the built library as `webpack-typescript-demo.js`.

## Verify the build
