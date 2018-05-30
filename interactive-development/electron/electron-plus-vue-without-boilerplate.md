# Electron + Vue Without Boilerplate

It is possible and actually easy.

Start from creating a Vue.js project:

```shell
$ vue init webpack <PROJECT_NAME>
```

And then add `electron` dependency:

```shell
$ yarn add -D electron
```

After that, we should firstly make sure that the development application runs smoothly. Add a file called `main.js` as the entry for Electron:

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
+    "electron": "electron . dev",
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

To distribute the application, firstly we should make sure the generated Vue.js app supports the `file://` URLs. Modify the `config/index.js` file:

```diff
   build: {
     // Template for index.html
     index: path.resolve(__dirname, '../dist/index.html'),

     // Paths
     assetsRoot: path.resolve(__dirname, '../dist'),
     assetsSubDirectory: 'static',
-    assetsPublicPath: '/',
+    assetsPublicPath: '',
```

Also edit the `main.js` file to support the distributed Vue.js app correctly:

```javascript
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  if (process.argv[2] === 'dev') {
    mainWindow.loadURL('http://localhost:8080')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'dist', 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
}

app.on('ready', createWindow)
```

If now we try:

```console
$ yarn build
$ node node_modules/electron/cli.js .
```

There should be an electron application window showing up without debug console.

Add `electron-packager` dependency:

```console
$ yarn add -D electron-packager
```

Edit the `package.json` file so that it could build the executable automatically.

```diff
     "build": "node build/build.js",
+    "packager": "npm run build; electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release"
   },
```

Note that, change the `platform` and `arch` options accordingly.

Now, we could run following command to build the release version of the application:

```console
$ yarn packager
```

Finally, open the final application with following command:

```console
$ open release/<PROJECT_NAME>-darwin-x64/<PROJECT_NAME>.app
```
