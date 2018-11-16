# Styling an Element in Sub-component

E.g. we an element with class `b` in the sub-component, and we want to styling it in the sub-component, and still want the `<style></style>` tag to be scoped. In this case we could use "Deep Selectors" provided by vue-loader.

For example:

```vue
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

Which will be compiled to:

```css
.a[data-v-f3f3eg9] .b { /* ... */ }
```

_Source: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors_
