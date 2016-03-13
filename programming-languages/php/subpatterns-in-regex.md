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

### Lookahead

This means roughly: read the content after this point, check whether it matches a particular subpattern, but the subpattern itself won't be consumed, and once the subpattern matches, continue match other patterns after it.

  ```php
'#\d*(?= mm)#'
  ```

This matches strings like `'100 mm'`, and the match with index __0__ (notice, the index is 0, not 1, which means the whole match has been affected) will be `'100'` (not `'100 mm'`).

Another example would be matching the valid password pattern:

  ```php
'#^(?=\w{8,20}$)(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=[^_]*_).*$#'
  ```

It firstly checks different conditions but does not consume them, if all conditions have matched, continue match the whole password string.

### Negative Lookahead

Similar to lookahead, except that the subpattern must not match.

  ```php
'#\d*(?!\d| mm)#'
  ```

This matches strings like `'100 cm'`, there need to be a `\d` in the subpattern. Otherwise, for `'100 mm'`, it will match `'10'`, for `'0 mm'` is not `' mm'`.

### Lookbehind

Similar to lookahead, except that the content before this point will be read.

  ```php
'#(?<=EUR )\d*#'
  ```

This matches strings like `'EUR 100'`, match with index 0 will be `'100'`.

### Negative Lookbehind

The relationship between lookbehind and negative lookbehind (`(?<!)`) is just like it between lookahead and negative lookahead. Example is omitted here.

### Named Match

  ```php
'#(?P<prefix>A+)C#'
  ```

It will match strings like `'AAAAC'`, and save `'AAAA'` to `$matches` with both numerical key (1 in this case) and string key (`'prefix'`).

### Call Subroutines

Subroutines call will reuse the predefined subpatterns but won't capture the match:

  ```php
'#(\w+) (?1)#'
  ```

It will match strings like `'foo bar'`, however only `'foo'` will be captured as a match.

`(?1)` means the first subpattern, `(?-1)` means the last defined subpattern, and `(?+1)` refers to the next defined subpattern.

Subpattern could also be referred by pattern names:

  ```php
'#(?<pattern>\w+) (?&pattern)#'
  ```

Recursive is possible:

  ```php
'#(\w+, (?1)?)(\w+)#'
  ```

It will match something like `'foo, bar, baz, qux'`, match with index 1 is `'foo, bar, baz, '` and index 2 is `'qux'`.

### Branch Reset

This is mentioned in PHP official document:

  ```php
'#(?:(Sat)ur|(Sun))day#'
  ```

While matching `'Sunday'`, there will be an empty match with index 1, because it tried to match `(Sat)`. To reset the branch if the branch is not matched, use this instead:

  ```php
'#(?|(Sat)ur|(Sun))day#'
  ```
