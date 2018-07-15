# Understanding This

To understand `this` keyword in JavaScript, one could imagine that the `this` is evaluated at the time that a method is called. There are roughly 4 situations:
1. Implicit binding;
2. Explicit binding;
3. `new` binding;
4. `window` binding.

## 1. Implicit Binding
If a method is called when there is a dot in the left of the method, then the value left to the dot is the value of this:
```javascript
let john = {
  name: 'John Doe',
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`)
  }
}

john.sayHello()
/*
sayHello() {
  this = john
  console.log(`Hello! My name is ${this.name}`)
}
*/
```

This also applies if the method is deeply embedded:
```javascript
let john = {
  name: 'John Doe',
  mother: {
    name: 'Marry Doe',
    sayHello: function() {
      console.log(`Hello! My name is ${this.name}`)
    }
  }
}

john.mother.sayHello()
/*
sayHello() {
  this = john.mother
  console.log(`Hello! My name is ${this.name}`)
}
*/
```

## 2. Explicit binding
We could explicitly set `this` value with `call` in the method:
```javascript
let john = {
  name: 'John Doe',
}

function sayHello() {
  console.log(`Hello! My name is ${this.name}`)
}

sayHello.call(john)
/*
sayHello() {
  this = john
  console.log(`Hello! My name is ${this.name}`)
}
*/
```

## 3. `new` binding
If there is a `new` keyword left to method call, `this` will be set to a brand new empty object:
```javascript
const Person = function(name) {
  this.name = name
}

new Person('John Doe')
/*
Person(name) {
  this = {}
  this.name = name
}
*/
```

## 4. `window` binding
If non of the 3 above applies, `this` will be set to `window`:
```javascript
function dontKnowWhatToDo() {
  this.foo = 'bar'
}

dontKnowWhatToDo()
/*
dontKnowWhatToDo() {
  this = window
  this.foo = 'bar'
}
*/
```
