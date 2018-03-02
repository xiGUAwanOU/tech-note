# Electron + Vue Without Boilerplate

It is possible and actually easy.

Start from creating a Vue.js project:

```shell
$ vue init webpack <PROJECT_NAME>
```

And then add electron dependency:

```shell
$ yarn add -D electron
```

After that, we should firstly make sure that the development application runs smoothly. Add a file called `main.js` as the entry for electron:

```javascript
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL('http://localhost:8080')
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)
```

Edit the `package.json` file like this:

```diff
+  "main": "main.js",
   "scripts": {
     "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
-    "start": "npm run dev",
+    "electron": "electron .",
     "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
     "e2e": "node test/e2e/runner.js",
     "test": "npm run unit && npm run e2e",
     "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",
     "build": "node build/build.js"
   }
```

Now we could start the development mode like this:

```console
$ yarn dev
$ yarn electron  # wait for the test server being fully started, and run this in another terminal
```

__WIP__: will add the distribution of the application.
