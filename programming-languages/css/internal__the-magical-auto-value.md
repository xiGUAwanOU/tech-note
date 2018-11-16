# The Magical Auto Value
One must know the effect of the value `auto`:

|Attribute|Effect|
|------|------|
|width|Take up all the width of the parent and leave the place for padding, border and margin (only work for `block` and `inline-block`)|
|height|Minimum height to contain the contents|
|margin|Left and right margin will evenly distribute the rest width, top and bottom margin will be 0|

W3C has a [specification](https://www.w3.org/TR/css-box-3/) for part of the contents here, but the implementation `auto` is conventional, not guranteed.
