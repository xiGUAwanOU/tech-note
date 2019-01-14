# Init with Webpack and TypeScript

## 1. Initialize NPM project
```shell
$ npm init
```

## 2. Add dependencies
```shell
$ npm install --save-dev webpack typescript tslint ts-node ts-loader
```

## 3. Configure Webpack
```javascript
// Content of "webpack.config.js" file:
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './server/main.ts',
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
    filename: 'server.js'
  },
  target: 'node'
}
```

# 4. Config TypeScript
```javascript
// Content of "tsconfig.json" file:
{
  "compilerOptions": {
    "outDir": "dist",
    "noImplicitAny": true,

    "module": "es6",
    "target": "es5",

    "alwaysStrict": true,
    "allowJs": true
  }
}
```

# 5. Install Express
```shell
$ npm install --save-dev express @types/express
```
