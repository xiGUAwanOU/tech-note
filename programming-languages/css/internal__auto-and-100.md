# Auto and 100%

|Attribute|`auto`|`100%`|
|------|------|------|
|width|Take up all the width of the parent and leave the place for padding, border and margin|Use 100% of the parent's width as the width value|
|height|Minimum height to contain the contents|Use 100% of the parent's height as the height value|
|margin|Left and right margin will evenly distribute the rest width, top and bottom margin will be 0|Use 100% of the parent's width as the margin value|
|padding|Simply 0|Use 100% of the parent's width as the margin value|
|border|3px, don't know why though|not available|

W3C has a [specification](https://www.w3.org/TR/css-box-3/) for part of the contents here, but the implementation `auto` is conventional, not guranteed.
