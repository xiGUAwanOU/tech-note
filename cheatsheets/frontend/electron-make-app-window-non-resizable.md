keywords electron, window, not resizable, non resizable
labels electron, javascript

# Electron: Make App Window Non-resizable
This only works for MacOS and Windows, doesn't work for Linux.

```javascript
mainWindow = new BrowserWindow({ width: 400, height: 700 })

mainWindow.setResizable(false)
mainWindow.setMaximizable(false)
mainWindow.setFullScreenable(false)
```
