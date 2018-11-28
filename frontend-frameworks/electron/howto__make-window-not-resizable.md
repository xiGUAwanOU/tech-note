# Make Window not Resizable

This only works for MacOS and Windows, doesn't work for Linux.

```javascript
mainWindow = new BrowserWindow({ width: 400, height: 700 })

mainWindow.setResizable(false)
mainWindow.setMaximizable(false)
mainWindow.setFullScreenable(false)
```
