keywords typescript, reusable, library, browser, basic, scaffolding, project, webpack
labels typescript, npm, webpack

# TypeScript: Basic Reusable Library Project for Browser
For browser, we need a single JavaScript file as dependency.

Install dependencies:
```console
npm install -D typescript webpack webpack-cli ts-loader
```

Configure TypeScript compiler (`tsconfig.json` file):
```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "paths": {
      "@/*": [ "src/*" ],
      "@test/*": [ "test/*" ]
    },
    
    "module": "es6",
    "target": "es5",

    "sourceMap": true,
    
    "alwaysStrict": true,
    "allowJs": true,
    "noImplicitAny": true
  }
}
```

Configure Webpack (`webpack.config.js` file):
```javascript
const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
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
    extensions: [ '.ts' ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@test': path.resolve(__dirname, 'test/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
}
```

Try to compile something with following command:
```console
$ npx webpack
```

Install TsLint:
```console
$ npm install -D tslint
```

Configure TsLint (`tslint.json` file):
```javascript
{
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "indent": [ true, "spaces", 2 ],
    "interface-name": false,
    "max-classes-per-file": false,
    "object-literal-sort-keys": false
  },
  "rulesDirectory": []
}
```

Test TsLint:
```console
$ npx tslint -c tslint.json src/**/*.ts
```

Finally, update scripts in `package.json`:
```javascript
// ... ...
"scripts": {
  "build:dev": "webpack",
  "build:prod": "webpack -p",
  "lint": "tslint -c tslint.json src/**/*.ts"
},
// ... ...
```
