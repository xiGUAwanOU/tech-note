# About Regex

If a shorter string is a prefix of the longer string, then the longer must be put before the shorter in the set of alternatives:

  ```php
'/(eq|lte|gte|lt|gt)/'
  ```

Notice, here `gte` must be placed before `gt`.
