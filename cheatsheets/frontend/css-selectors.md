keywords css, selectors
labels css

# CSS: Selectors

## Bread & Butter
* `.class`: select all elements with specified class;
* `#id`: select the element with specified ID;
* `element`: select all elements with sepecified tag;
* `*`: select all elements;

## Multiple Conditions
* `A,B`: match with condition A or B;

## Combinators
* `A > B`: all B which have A as direct parent;
* `A B`: all B inside A (may not be direct parent);
* `A + B`: all B which have same level as A but directly follows A;
* `A ~ B`: all B which have same level as A but follows A (may not be directly);

## Attributes
* `[attr]`: all elements with attr;
* `[attr=value]`: all elements with attr set to value.

See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) for a full list.
