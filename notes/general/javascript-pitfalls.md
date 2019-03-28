labels javascript

# JavaScript: Pitfalls

## 1. Fill an Array with Non-Primitive Type
```javascript
let arr = Array(3).fill({})  // [{}, {}, {}]
arr[0].hi = "hi"             // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
