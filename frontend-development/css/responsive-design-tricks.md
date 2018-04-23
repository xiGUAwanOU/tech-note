# Responsive Design Tricks

## Responsive HTML
Make a webpage responsive. Put the following meta definition into the `<head>...</head>` selction:

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

This will overwrite the initial webpage width with the actual device width.

## Units Explained
* `em`: relative to the `font-size` set in the current element;
* `rem`: relative to the `font-size` set in the root element;
* `px`: according to some information, 1 CSS px = 1/96 CSS in.
