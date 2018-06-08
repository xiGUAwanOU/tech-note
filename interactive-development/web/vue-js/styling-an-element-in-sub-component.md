# Styling an Element in Sub-component

E.g. we have `<li></li>` in both current component and also its sub-component. We only want to styling `<li></li>` in its sub-component, and still want the style definitions be scoped. In this case we could use "Deep Selectors" provided by vue-loader.

For example:

```vue
<style scoped>
.a >>> .b { /* ... */ }
</style>
```
