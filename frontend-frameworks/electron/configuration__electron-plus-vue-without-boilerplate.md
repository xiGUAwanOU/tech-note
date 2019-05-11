# Electron + Vue Without Boilerplate

It is possible and actually easy.

Start from creating a Vue.js project:

```shell
$ vue create <PROJECT_NAME>
```

And then add `electron` dependency:

```shell
$ npm install -D electron
```

After that, we should firstly make sure that the development application runs smoothly. Add a file called `main.js` as the entry for Electron:

```javascript
const { app, BrowserWindow } = require('electron')

function createWindow () {
  let mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL('http://localhost:8080')
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)
```

Edit the `package.json` file like this:

```diff
+  "main": "main.js",
   "scripts": {
     "serve": "vue-cli-service serve",
+    "electron": "electron . dev",
     "build": "vue-cli-service build",
     "lint": "vue-cli-service lint",
     "test:unit": "vue-cli-service test:unit"
   },
```

Now we could start the development mode like this:

```console
$ npm run serve
$ npm run electron  # wait for the test server being fully started, and run this in another terminal
```

To distribute the application, firstly we should make sure the generated Vue.js app supports the `file://` URLs. Create the `vue.config.js` file like following:

```javascript
module.exports = {
  publicPath: ''
}
```

Also extend the `main.js` file to support the distributed Vue.js app correctly:

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
$ npm run build
$ npx electron .
```

There should be an electron application window showing up without debug console.

Add `electron-packager` dependency:

```console
$ npm install -D electron-packager
```

Edit the `package.json` file so that it could build the executable automatically.

```diff
   "build": "vue-cli-service build",
+  "package": "npm run build && electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release",
```

Note that, change the `platform` and `arch` options accordingly.

Now, we could run following command to build the release version of the application:

```console
$ npm run package
```

Finally, open the final application with following command:

```console
$ open release/<PROJECT_NAME>-darwin-x64/<PROJECT_NAME>.app
```
