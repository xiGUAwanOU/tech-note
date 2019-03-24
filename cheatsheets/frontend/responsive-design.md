keywords responsive, head, viewport, meta, media, query, breakpoint, html, css
labels html, css, responsive

# Responsive Design Related

## Responsive HTML
Make a webpage responsive. Put the following meta definition into the `<head>...</head>` selction:

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

This will overwrite the initial webpage width with the actual device width.

Other useful contents are:
* `maximum-scale=<number>`
* `minimum-scale=<number>`
* `user-scalable=<yes or no>` (not supported by iOS 10+)

## Responsive CSS
Responsive in CSS is mainly achieved by media queries. For example:

```css
@media (min-width: 900px) {
  .content: {
    color: red;
  }
}

@media (min-width: 600px) and (max-width: 899px) {
  .content: {
    color: green;
  }
}

@media (max-width: 599px) {
  .content: {
    color: blue;
  }
}
```

Other useful media queries are:
* `hover: <none or hover>`, select if the pointer can hover on an element
