labels javascript

# JavaScript: Avoid Global Namespace Pollution

In vanilla JavaScript, there is a typical pattern to avoid polluting the global name space by defining an anonymous function and call it directly.

For example:
```javascript
const globalName = (function () {
  function localFunc1 (a, b) {
    return a + b
  }
  
  function localFunc2 (a, b) {
    return a * b
  }
  
  let localVar1 = 42
  let localVar2 = 'hello world'
  
  return {
    localFunc1,
    localFunc2,
    localVar1,
    localVar2
  }
})()
```

In this case, the `local*` names won't leak into the global namespace, but be packed into the `globalName` object.

A generalized learning from this pattern could be, wrap object in the function return value is an effective way to generate a "namespace" in vanilla JavaScript.
