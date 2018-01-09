# Facts About `Promise`

## 1. Remember to Return from the Promise Callback
Notice that `resolve` / `reject` won't terminate the control flow

```javascript
new Promise((resolve, reject) => {
  resolve('foo') // reject('foo') is similar
  console.log('bar')
}).then(value => {
  console.log(`Resolved: ${value}`)
}).catch(value => {
  console.log(`Rejected: ${value}`)
})

// bar
// Resolved: foo
```

To prevent this behaviour, use `return resolve('foo')` instead.
