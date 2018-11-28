# Provide Native Libraries for Angular Application
This is a temporary solution. Probably they will figure out a better solution in the future.

Create a `native.js` file first.

```javascript
// In file native.js
window.fs = require('fs');
window.os = require('os');
window.path = require('path');
```

Then include this script into the Angular application.

```javascript
// In file angular.json, all the non-related fields are omitted
{
  "projects": {
    "<PROJECT_NAME>": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              // This item is newly added
              "./native.js"
            ]
          }
        }
      }
    }
  }
}
```

In the TypeScript files, use `window['fs']` to get the reference.

```javascript
window['fs'].readFileSync(FILE_PATH, { encoding: 'utf8' });
```
