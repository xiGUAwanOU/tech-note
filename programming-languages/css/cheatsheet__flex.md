# Flex

Enable flex display in the container:

```css
.container {
  display: flex; /* or inline-flex */
}
```

Content direction (default `row`):

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

Wrapping of the contents (default `nowrap`):

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

Align contents along the main axis, if `flex-direction: row | row-reverse`, this will be the horizontal alignment, otherwise vertical alignment (default `flex-start`):

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

Align contents along the cross axis (default `flex-start`):

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
