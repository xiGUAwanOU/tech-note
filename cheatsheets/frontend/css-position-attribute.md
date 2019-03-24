keywords css, position
labels css

# CSS Position Attribute
* `static`:
  * The default behaviour if other position value is not specified.
* `relative`:
  * New position relative to its normal position.
  * The original space of the element will be still taken.
  * Used to create some offset.
* `absolute`:
  * Positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
  * The element won't take its original space.
  * Widely used to implement the movable div.
* `fixed`:
  * Positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none, in which case that ancestor behaves as the containing block.
  * The element won't take its original space.
  * Typical usecase is making the hover element which won't be affected by scrolling.
* `sticky`:
  * Keeps its position if its normal position cannot fulfill its specified values (for example, with its normal position, the `top` value is smaller than the specified value). But be careful, sticky element will always stay within its containing block.
  * The original space of the element will be still taken.
  * Typical usecase is making main menu "stick" at the top of the page.
