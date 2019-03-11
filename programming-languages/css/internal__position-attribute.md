# Position Attribute

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
  * Typical usecase is make the hover element which won't be affected by scrolling.
