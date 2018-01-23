# Unit Test Tricks

## Test Custom Events

```js
let vm = mount(SomeComponent)

vm.$on('close', methodStubs.onClose)

// Do something to trigger the event ...

Vue.nextTick(() => {
  expect(methodStubs.onClose).toHaveBeenCalled()
  done()
})
```
