# Init with Webpack and TypeScript

## 1. Initialize NPM project
```shell
$ npm init
```

## 2. Add dependencies
```shell
$ npm install --save-dev webpack webpack-cli typescript tslint ts-node ts-loader
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

# 6. Write code
```typescript
// Content of "server/main.ts" file:
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

# 7. Try to compile and run
```console
$ npx webpack
$ node dist/server.js
```
