# `new` Operator in JavaScript

```javascript
let obj = new Ctor('foo', 'bar', 42)

// This is roughly equivalent to:
let obj = { ctor: Ctor, ...Ctor.prototype }
obj.ctor('foo', 'bar', 42)
delete obj.ctor
```
