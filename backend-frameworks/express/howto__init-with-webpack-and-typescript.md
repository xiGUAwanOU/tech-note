# Init with Webpack and TypeScript

## 1. Initialize NPM project
```console
$ npm init
```

## 2. Add basic dependencies
```console
$ npm install --save-dev webpack webpack-cli typescript tslint ts-node ts-loader
```

## 3. Configure Webpack
```javascript
// Content of "webpack.config.js" file:
const path = require('path');

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
    extensions: [ '.ts', '.js' ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@test': path.resolve(__dirname, 'test/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application.js'
  },
  target: 'node'
};

```

## 4. Config TypeScript
```javascript
// Content of "tsconfig.json" file:
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "paths": {
      "@/*": [ "src/*" ],
      "@test/*": [ "test/*" ]
    },
    
    "module": "commonjs",
    "target": "es6",
    
    "moduleResolution": "node",
    "esModuleInterop": true,

    "sourceMap": true,
    
    "alwaysStrict": true,
    "allowJs": true,
    "noImplicitAny": true
  }
}

```

## 5. Configure TsLint
```console
$ npx tslint --init
```

An example of the configurations:
```javascript
// Content of "tslint.json" file:
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
      "interface-name": false,
      "object-literal-sort-keys": false
    },
    "rulesDirectory": []
}
```

## 6. Add Express dependencies
```console
$ npm install --save-dev express @types/express
```

## 7. Write code
```typescript
// Content of "src/main.ts" file:
import * as express from 'express';
import { Request, Response } from 'express';

export const app = express();

app.set('port', 3000);

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  response.status(200);
  response.json({ message: 'Hello world' });
  response.end();
});

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});
```

## 8. Try to compile and run
```console
$ npx webpack
$ node dist/application.js
```

## 9. Adding unit test dependencies to the project
```console
$ npm install --save-dev jest @types/jest ts-jest
```

## 10. Adding Jest configuration
```javascript
// Content of jest.config.js file:
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  setupFiles: ['./test/setup.js'],
  moduleFileExtensions: [ 'ts', 'js', 'json' ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '**/test/**/*.spec.(ts|js)'
  ],
  testEnvironment: 'node'
};
```

```javascript
// Content of setup.js file:
process.on("unhandledRejection", (uncaughtRejection) => {
  throw uncaughtRejection
})
```

## 11. Adding unit test files
```javascript
describe("Whatever", () => {
  it("should be correct", () => {
    expect(1).toEqual(1);
  });
});
```

## 12. Run unit tests
```console
$ npx jest
```

## 13. A reference of the `script` field
```javascript
// In package.json file:
"scripts": {
  "build": "webpack",
  "start": "node dist/application.js",
  "lint": "tslint -c tslint.json **/*.ts",
  "test": "jest"
},
```
