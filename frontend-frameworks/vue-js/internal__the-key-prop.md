# The `key` Prop
We usually use the `key` prop with `v-for` elements. However, this prop is actually not tied to `v-for`. Vue.js is using this prop to decide if the component should be replaced (if the value of `key` is changed) or updated (if the value of `key` stays the same). Once a component get replaced, the lifecycle of the component will start from the beginning.

We can use this feature to force reload a component. E.g., if the URL has changed, but the component is not changed, then the lifecycle hook of the component won't be called, because it is not reloaded. Considering the URL pattern for a component `/path/to/entities/:id`, if the `:id` has been changed, the component doesn't display the new content, because the HTTP calls are usually in the lifecycle hook, which is not called if component is not reloaded.

So one of the solution could be, add `key` to the `router-view` component:

```vue
<router-view :key="$route.fullPath"/>
```

This will tell vue.js, replace the `router-view` component if the full path has been changed. In this case, the lifecycle hook will always been called.
