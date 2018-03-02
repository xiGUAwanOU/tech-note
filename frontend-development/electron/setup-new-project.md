# Setup New Project

This is a guide to setup a new electron project. Follow the steps below:

```console
$ yarn init
$ yarn add -D electron
```

Note that, to install `electron` as a development dependency is officially recommended.

Add `scripts` field in `package.json` file to start the electron application:

```json
"main": "main.js",
"scripts": {
  "start": "electron ."
}
```

Write the `main.js` file like this:

```javascript
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)
```

At last prepare any `index.html` file, and start the application with:

```console
$ yarn start
```

And it's done.
