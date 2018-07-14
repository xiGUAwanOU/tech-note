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

## Start from Breakpoints

```sass
@mixin page-width($point)
  @if $point == "xlarge-and-up"
    @media (min-width: $large-screen-max-width)
      @content
  @else if $point == "large-and-up"
    @media (min-width: $medium-screen-max-width)
      @content
  @else if $point == "medium-and-up"
    @media (min-width: $small-screen-max-width)
      @content
  @else if $point == "small"
    @media (max-width: $small-screen-max-width)
      @content
```

## Apply Breakpoints

```sass
.global-container
  display: flex
  flex-direction: column
  @include page-width("medium-and-up")
    flex-direction: row
```
