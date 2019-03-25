keywords css, vertical, center, centering, middle
labels css

# CSS: Vertical Centering `inline` or `inline-block` Elements
`vertical-align: middle` only puts the element in the vertical center of the total line height, but the problem is, if the line height is the same as the height of the element, then it won't make any difference.

The first thought one might have is to set the `line-height: 100%`, but nope, it will make the line height 100% of the height of the font, not the height of its parent.

A "trick" to avoid this is to add a pseudo element which have the full parent element height to expand the line height, to make the `vertical-align: middle` working as expected.

```css
.container {
  text-align: center;
  white-space: nowrap;
}

.container::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
}

.element {
  display: inline;
  vertical-align: middle;
}
```

The magic here is the `::before` pseudo element and its attributes `display: inline-block` and `height: 100%`, this makes the current line takes the 100% of the height of the parent element. Then, the `vertical-align: middle` applied on the child element should be working as expected.
