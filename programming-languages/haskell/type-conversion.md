# Type Conversion

One of the common problems is to convert string to numerical values:

  ```haskell
read "42" :: Integer
  ```

and to convert numerical values to string:

  ```haskell
show 42
  ```

Another problem should be casting between numerical values:

convert integer to floating-point number:

  ```haskell
fromIntegral 42
  ```

convert floating-point number to integer:

  ```haskell
floor 3.14159265
  ```

There are other functions like `ceiling`, `truncate` and `round` which will do the conversion work.
