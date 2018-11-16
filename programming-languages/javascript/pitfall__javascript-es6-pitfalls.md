# JavaScript ES6 Pitfalls

### Be Careful with `Array().fill()`

Be careful if the filled value does not have a primitive type:

```javascript
let arr = Array(3).fill({})  // [{}, {}, {}]
arr[0].hi = "hi"             // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
