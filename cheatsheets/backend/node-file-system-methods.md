keywords node, javascript, open, file, list, directory, test, is file, is directory, recursive, recursively
labels node, javascript

# Node: File System Methods
Only list some useful methods below:

```javascript
const fs = require('fs')
const path = require('path')

function goThroughDirectoryTree(basePath) {
  const dirEntries = fs.readdirSync(basePath, { encoding: 'utf8', withFileTypes: true })
  for (let dirEntry of dirEntries) {
    if (dirEntry.isFile()) {
      console.log(`${dirEntry.name} is a file.`)
      console.log(fs.readFileSync(dirEntry.name, 'utf8'))
    } else if (dirEntry.isDirectory()) {
      console.log(`${dirEntry.name} is a directory`)
      goThroughDirectoryTree(path.join(basePath, dirEntry.name))
    }
  }
}
```