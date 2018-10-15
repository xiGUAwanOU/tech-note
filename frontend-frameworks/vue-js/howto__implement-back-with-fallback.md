# Implement Back with Fallback
Using `vue-router` library, extending the `VueRouter` class. Following code snippet is only showing the idea.
```javascript
class Router extends VueRouter {
  constructor(...args) {
    super(...args)
    this.cameFrom = null
    this.beforeEach((to, from, next) => {
      this.cameFrom = from.name
      next()
    })
  }

  backWithFallback(fallbackTarget) {
    if (this.cameFrom) {
      this.back()
    } else {
      this.push(fallbackTarget)
    }
  }
}
```
