keywords vuejs, router, vue-router, prop
labels vuejs, vue-router

# VueJs: Router with Props

## 1. Basic Usage
```javascript
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true }
  ]
})
```

## 2. Static Prop Value
```javascript
const router = new VueRouter({
  routes: [
    { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
  ]
})
```

## 3. Props in URL Query
```javascript
const router = new VueRouter({
  routes: [
    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  ]
})
```

In this case, if there is an URL like `/search?q=vue`, then `{ query: "vue" }` will be passed as property of the component.

For further references see the [official document](https://router.vuejs.org/en/essentials/passing-props.html) of Vue.js.
