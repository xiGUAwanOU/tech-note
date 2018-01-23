# Unit Test Tricks

## Test custom events

```js
let vm = mount(SomeComponent)

vm.$on('close', methodStubs.onClose)

// Do something to trigger the event ...

Vue.nextTick(() => {
  expect(methodStubs.onClose).toHaveBeenCalled()
  done()
})
```

## Test the `files` attribute of an file input

`files` attribute of a file input only accept `FileList` typed value, so to build a `FileList`:

```javascript
const FILE = new File([''], FILE_NAME)

let dataTransfer = new DataTransfer()
dataTransfer.items.add(FILE)

fileInput.files = dataTransfer.files
```
