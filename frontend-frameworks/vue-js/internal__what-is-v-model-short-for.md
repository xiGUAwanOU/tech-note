# What Is `v-model` Short For?

For quick reference:

```html
<input v-model="something">
```

is short for

```html
<input
  v-bind:value="something"
  v-on:input="something = $event.target.value">
```

The original answer is from the [official documentation](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events).
