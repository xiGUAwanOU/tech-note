# Iterate Over Different Data Structures

## Array / Set / Map

Use the `Array.prototype.forEach` or the method with same name in `Set` and `Map`:

```javascript
arr.forEach(function(element) {
  console.log(element)
})
```

## Object

Either use `Object.keys(obj).forEach`, or use `_.forEach` from lodash:

```javascript
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key)
})
```

