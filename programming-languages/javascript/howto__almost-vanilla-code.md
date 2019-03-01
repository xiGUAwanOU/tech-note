# Almost Vanilla Code
With some minimal effort, we can build a frontend project with almost vanilla JS code. With some convention, we can keep the project simple, clean, readable and testable.

## 1. Tools We Need
We need to install and configure following tools:
* Babel;
* Browserify;
* PostCSS;
* Eslint;
* Stylelint.

### 1.1. Install & Configure Babel
```console
$ npm install -D @babel/core @babel/cli @babel/preset-env
```

Edit `babel.config.js` file:
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
}
```

We transpile JavaScript for node instead of browsers because we want to keep the CommonJS-styled `require/module.exports` in the code, and Browserify will take care of it. There could be other potential incompatabilities, but currently I haven't found any.

### 1.2. Install Browserify
It will pack all the different JavaScript code files into one according to the CommonJS-styled `require/module.exports`.

```console
$ npm install -D browserify
```

### 1.3. Install PostCSS
```console
$ npm install -D postcss postcss-cli autoprefixer
```

### 1.4. Install & Configure Linters
```console
$ npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard stylelint stylelint-config-standard
```

Content of `.eslintrc.js`:
```javascript
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
  }
}
```

Content of `stylelint.config.js`:
```javascript
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {}
}
```

## 2. Write the Build Script
There is no webpack/gulp/grunt helping us with this, we have to write bash scripts.

Content of `scripts/lint.sh`
```bash
#!/usr/bin/env bash
npx stylelint --fix css/**/*.css
npx eslint --fix js
```

Content of `scripts/build.sh`
```bash
#!/usr/bin/env bash
rm -rf dist
rm -rf build

mkdir dist

npx postcss --use autoprefixer --base css --dir dist css/**/*.css
cp html/*.html dist

mkdir build
npx babel js --out-dir build
npx browserify build/main.js --outfile dist/main.js
rm -rf build
```

## 3. Example
Take the code below as an example:

```javascript
// main.js
const primaryButton = require('./primary-button')

function main () {
  const globals = {}

  globals.doms = {
    primaryButton: document.getElementById('primary-button')
    message: document.getElementById('message')
  }

  globals.states = {
    primaryButtonClicked: false
  }

  globals.eventBus = new EventTarget()
  
  primaryButton.initialize(globals)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main)
} else {
  main()
}
```

```javascript
// primary-button.js
const primaryButton = {
  initialize (globals) {
    globals.doms.primaryButton.addEventListener('click', () => onPrimaryButtonClick(globals))
  }
}

function onPrimaryButtonClick(globals) {
  globals.doms.message.innerText = 'hello world'
  globals.states.primaryButtonClicked = true
  globals.eventBus.dispatchEvent(new CustomEvent('primaryButtonClick'))
}

module.exports = primaryButton
```

## 4. Explainations
There are several important concepts in the JavaScript code structure shown above:
* globals: keep a set of global references
  * doms: all the **static** DOMs in the current HTML page that are manipulated by JavaScript
  * states: all data that should be globally available
  * eventBus: a reference where processors can send or listen to events
* processors: frontend business logics


The flow of the program should be like this. First of all, we should initialize a `globals` reference, since it is the basic of the whole program. On initialize, each processor will take the `globals` reference as a parameter and add listeners to DOMs or event bus or set initial values for the global states. After that, the whole UI should be working.

In the example shown above, we have a button and an area displaying the text message. Once the button is clicked, a text message "hello world" should be displayed.

In this case, we have two DOMs which are `primaryButton` and `message`. Although useless here, we have also added the state `primaryButtonClicked` and the event bus to the `globals`. We have only one processor module, which is `primary-button`.

We can see that the primary button processor module has added an event listener to the `primaryButton` DOM on initialize. Once the listener is triggered, it will set the inner text of `message` DOM to `hello world`. Setting states and dispatching events are useless in this example, but imagine if there are more processor modules, global state and event bus will help us decouple the dependencies between different processor modules.
