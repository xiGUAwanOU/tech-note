# Quick Tutorial

### 1. Hello World!

A simplest shell script:

  ```sh
echo Hello world!
  ```

There is no need to add quotes around `Hello world!`. They are simply treated as 2 arguments of the `echo` command.

The double quote will make it as one argument:

  ```sh
echo  Hello    world!   # Output: Hello world!
echo "Hello    world!"  # Output: Hello   world!
  ```

### 2. Words About Quotes

There are three kinds of quotes in bash shell: single quote `'`, double quote `"` and backtick ```.
