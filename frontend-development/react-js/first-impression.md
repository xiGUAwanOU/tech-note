# First Impression of React.js

## First Steps

Install the new project creation CLI tool:

```shell
$ npm install -g create-react-app
```

Create a new React.js project:

```shell
$ create-react-app <PROJECT_NAME>
```

Use following command to start the test server:

```shell
$ yarn start
```

First impression is, "I don't even think this kind of source code (JSX), would work". Let's get deeper into it.

Folder structure seems to be quite simple and straigt forward:
* `public`: static contents;
* `src`: source code files.

There is also much useful information in `README.md` file, better to read it through.

## Cheatsheet

### 1. Basic Component Rendering

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}
```

### 2. Property Rendering

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}
```
