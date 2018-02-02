# Some Interesting ES2015+ Features

_Currently all of the features below are from ES2015 Specification_

Support for computed names in object property definitions:

```javascript
let obj = {
  foo: "bar",
  [ "baz" + quux() ]: 42
}
```

Intuitive and flexible destructuring of Arrays into individual variables during assignment:

```javascript
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```

Intuitive and flexible destructuring of Objects into individual variables during assignment:

```javascript
var { op, lhs, rhs } = getASTNode()
var { op: a, lhs: { op: b }, rhs: c } = getASTNode() // Deep matching
```

Simple and intuitive default values for destructuring of Objects and Arrays:

```javascript
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list
```

Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls:

```javascript
function f([name, val]) {
  console.log(name, val)
}

function g({name: n, val: v}) {
  console.log(n, v)
}

function h({name, val}) {
  console.log(name, val)
}

f(["bar", 42])
g({name: "foo", val: 7})
h({name: "bar", val: 42})
```

Getter/Setter also directly within classes (and not just within object initializers, as it is possible since ECMAScript 5.1):

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width this._height = height
  }
  set width(width) { this._width = width }
  get width() { return this._width }
  set height(height) { this._height = height }
  get height() { return this._height }
  get area() { return this._width * this._height }
}
var r = new Rectangle(50, 20)
r.area === 1000
```
