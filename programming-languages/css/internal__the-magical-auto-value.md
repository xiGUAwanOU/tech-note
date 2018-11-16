# The Magical Auto Value
One must know the effect of the value `auto`:

|Attribute|Effect|
|------|------|
|width|Take up all the width of the parent and leave the place for padding, border and margin|
|width of flexbox container|Same as above|
|width of flexbox item|Minimum width to contain the contents <sup>1</sup>|
|height|Minimum height to contain the contents|
|margin|Left and right margin will evenly distribute the rest width, top and bottom margin will be 0|

\[1\]: This behaviour is not intuitive, but we shouldn't use `width` to define the width of a flexbox item anyways.

W3C has a [specification](https://www.w3.org/TR/css-box-3/) for part of the contents here, but the implementation `auto` is conventional, not guranteed.
