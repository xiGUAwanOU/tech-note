# Subpatterns in Regex

### Basic Capturing

  ```php
preg_match('#color\h*:\h*([A-Za-z]*)#', 'color: red', $matches);
print_r($matches);
  ```

### Order Is Important

If a shorter string is a prefix of the longer string, then the longer must be put before the shorter in the set of alternatives:

  ```php
'#(eq|lte|gte|lt|gt)#'
  ```

Notice, here `gte` must be placed before `gt`.

### Non-Capturing Subpatterns

  ```php
'#(?:https?|ftp)://([A-Za-z\.]+)#'
  ```

Notice, this is only an example. It is a bad practise, use `parse_url` function instead.

### Lookahead After the Match

  ```php
'#\d*(?= mm)#'
  ```

This matches strings like `'100 mm'`, and the match with index __0__ (notice, the index is 0, not 1, which means the whole match has been affected) will be `'100'` (not `'100 mm'`).
