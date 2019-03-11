# Prompt Before Tab is Closed

This should be supported by all the mainstream webbrowsers.

```javascript
window.addEventListener('beforeunload', () => {
  return 'Are you sure to leave this page?'
})
```
