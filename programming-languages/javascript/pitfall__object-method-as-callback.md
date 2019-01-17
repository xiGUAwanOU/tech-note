# Object Method as Callback

```javascript
const obj = {
  message: "hello world",
  callback: () => {
    console.log(this.message)
  }
}

function func(callback) {
  callback()
}

func(obj.callback) // Output: undefined
```

The reason why this is not working as expected is because the callback method implementation needs a receiver. However if it is passed as a callback along, the receiver won't be packed into the closure. And when calling the closure as `callback()`, there is no receiver at all.

To avoid this, either do:
```javascript
const obj = {
  message: "hello world",
  getCallback: () => {
    return () => {
      console.log(this.message)
    }
  }
}
```

Or:
```javascript
const obj = {
  message: "hello world",
  callback: () => {
    const self = this
    console.log(self.message)
  }
}
```
