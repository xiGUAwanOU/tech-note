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

Once a router is changing, if it is still in Vue.js world, the previous route will be recorded. Once the user is going back, it will check first if it was coming from somewhere inside Vue.js world, if so, go back to there; otherwise go to the default target.
