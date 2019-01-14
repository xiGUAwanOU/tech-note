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
    "outDir": "dist",
    "noImplicitAny": true,

    "module": "es6",
    "target": "es5",

    "alwaysStrict": true,
    "allowJs": true
  }
}
```

## 5. Add Express dependencies
```console
$ npm install --save-dev express @types/express
```

## 6. Write code
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

## 7. Try to compile and run
```console
$ npx webpack
$ node dist/application.js
```

## 8. Adding unit test dependencies to the project
```console
$ npm install --save-dev jest @types/jest ts-jest
```

## 9. Adding Jest configuration
```javascript
// Content of jest.config.js file:
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
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

## 10. Adding unit test files
```javascript
describe("Whatever", () => {
  it("should be correct", () => {
    expect(1).toEqual(1);
  });
});
```

## 11. Run unit tests
```console
$ run jest
```

## 12. A reference of the `script` field
```javascript
// In package.json file:
"scripts": {
  "build": "webpack",
  "start": "node dist/application.js",
  "lint": "tslint -c tslint.json **/*.ts",
  "test": "jest"
},
```
