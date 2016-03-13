# Subpatterns in Regex

### Order Is Important

If a shorter string is a prefix of the longer string, then the longer must be put before the shorter in the set of alternatives:

  ```php
'#(eq|lte|gte|lt|gt)#'
  ```

Notice, here `gte` must be placed before `gt`.

### Non-greedy Match

  ```php
'#<p>.*?</p>#'
  ```

### Non-Capturing Subpatterns

  ```php
'#(?:https?|ftp)://([A-Za-z\.]+)#'
  ```

Notice, this is only an example. It is a bad practise, use `parse_url` function instead.

