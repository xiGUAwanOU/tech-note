# Router View with Names

Say we have a navigation menu, and an article view. While showing the article view, we also want to add something to the navigation menu. It is usually hard to do so, without repeating the other part of navigation menu in the article view component.

Possibilities could be either using something like `vue-portal` or use named router view provided by `vue-router`.

```html
<!-- In the App.vue file -->
<router-view class="content-view"/>

<!-- In the NavMenu.vue file -->
<router-view class="nav-menu-extra-content" name="navMenuExtraContent"/>
```

And in the router definition file, we could write something like this:

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/articleView',
      name: 'articleView'
      components: {
        default: ArticleView,
        navMenuExtraContent: ArticleViewNavMenuButtons
      }
    }
  ]
})
```
