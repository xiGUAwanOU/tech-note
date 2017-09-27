# Selectors Cheatsheet

|Syntax|Description|
|------|-----------|
|.class|Select all elements with specified class|
|#id|Select element with specified ID|
|*|Select all elements|
|element|Select all elements with sepecified label|
|A,B|Select all A and all B|
|A > B|Select all B which have A as direct parent|
|A B|Select all B inside A|
|A + B|Select all B which have save level as A but directly follows A|
|A ~ B|Select all B which have the same level as A but follows A (may not be directly)|
|[attr]|Select all elements with specified attribute|
|[attr=value]|Select all elements with specified attribute and value|
|[attr~=value]|Select all elements with specified attribute containing the value|
|[attr|=value]|Select all elements with specified attribute starting with the value followed by `-` character|
|[attr^=value]|Select all elements with specified attribute starting with the value|
|[attr$=value]|Select all elements with specified attribute ending with the value|
|[attr*=value]|Select all elements with specified attribute containing the value|
