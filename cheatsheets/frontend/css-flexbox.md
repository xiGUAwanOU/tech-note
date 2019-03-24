keywords css, flexbox
labels css

# CSS Flexbox
Enable flex display in the container:
```css
.container {
  display: flex;
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

Align contents along the main axis (default `flex-start`), if `flex-direction: row | row-reverse`, this will be the left & right alignment (defining the position along the horizontal axis), otherwise up & down alignment:
```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

Align contents along the cross axis (default `stretch`):
```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

Align lines along the cross axis (default `stretch`):
```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
