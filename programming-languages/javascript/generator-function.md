# Generator Function

Not much to say, just example:

```javascript
function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

Define generator functions directly in class or object:

```javascript
class Clz {
  * bar () {
    ...
  }
}

let Obj = {
  * foo () {
    ...
  }
}
```
