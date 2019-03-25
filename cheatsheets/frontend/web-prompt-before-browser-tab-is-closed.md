keywords prompt, warning, notify, notification, before, tab, closed
labels web, javascript

# Web: Prompt Before Browser Tab is Closed
This should be supported by all the mainstream webbrowsers.

```javascript
window.addEventListener('beforeunload', event => {
  event.returnValue = 'Do you really want to close this page?'
})
```
