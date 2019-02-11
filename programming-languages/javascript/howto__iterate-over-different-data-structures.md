# Iterate Over Different Data Structures

## Array / Set / Map

Use `for ... of ...` control block:
```javascript
for (const item of arr) {
  console.log(item)
}
```

Use the `Array.prototype.forEach` or the method with same name in `Set` and `Map`:
```javascript
arr.forEach((item, index) => {
  console.log(index)
})
```

## Object

Use `for ... in ...` control block:
```javascript
for (const key in obj) {
  console.log(key)
}
```

Either use `Object.keys(obj).forEach`, or use `_.forEach` from lodash:
```javascript
Object.keys(obj).forEach((key) => {
  console.log(key)
})

_.forEach({ 'a': 1, 'b': 2 }, (value, key) => {
  console.log(key)
})
```
