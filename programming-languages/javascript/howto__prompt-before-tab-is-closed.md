# Prompt Before Tab is Closed

```javascript
window.addEventListener('beforeunload', () => {
  return 'Are you sure to leave this page?'
})
```
