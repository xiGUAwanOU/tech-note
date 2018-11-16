# Responsive Design Related

## Responsive HTML
Make a webpage responsive. Put the following meta definition into the `<head>...</head>` selction:

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

This will overwrite the initial webpage width with the actual device width.

## Units Explained
* `em`: relative to the `font-size` set in the current element;
* `rem`: relative to the `font-size` set in the root element;
* `px`: according to some sources, 1 CSS px = 1/96 CSS in, no matter what dpi does a monitor have.

## Breakpoints

Breakpoints are the threshold values of the screen width used for the decision of how the elements in the page should be displayed. E.g., we could have breakpoints `900px` and `600px`. If screen wider than 900px, we show 3 columns; if between 900px and 600px, we show 2 columns; if narrower than 600px, we show 1 column.

```css
@media (min-width: 900px) {
  // styles to show 3 columns
}

@media (min-width: 600px) and (max-width: 899px) {
  // styles to show 2 columns
}

@media (max-width: 599px) {
  // styles to show 1 columns
}
```
