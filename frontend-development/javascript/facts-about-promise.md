# Facts About `Promise`

## 1. `resolve` / `reject` Won't Terminate The Controle Flow

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
