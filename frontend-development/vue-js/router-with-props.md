# Router with Props

There are several different ways to pass parameters as properties into a component.

The simplest way of doing it is like following:

```javascript
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true }
  ]
})
```

And the parameters in the path will be passed to the component as properties.

If the properties are static, we could do something like this:

```javascript
const router = new VueRouter({
  routes: [
    { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
  ]
})
```

If there is queries in the URL that we want to pass to components as properties, we could:

```javascript
const router = new VueRouter({
  routes: [
    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  ]
})
```

In this case, if there is an URL like `/search?q=vue`, then `{ query: "vue" }` will be passed as property of the component.

For further references see the [officla document](https://router.vuejs.org/en/essentials/passing-props.html) of Vue.js.
