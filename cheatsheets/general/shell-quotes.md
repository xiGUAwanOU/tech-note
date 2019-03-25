keywords shell, quotes, single quote, double quote, backtick
labels shell

# Shell: Quotes
There are three kinds of quotes in bash shell: single quote `'`, double quote `"` and backtick `\``.

## Single Quote

Everything in single quote will be treated "as-is", for example:

```sh
NAME=xiGUAwanOU
echo 'Hello $NAME!'  # Output: Hello $NAME!
```

Simply use `'\''` to escape single quote:

```sh
echo 'It'\''s Ok!'  # Output: It's Ok!
```

Actually, the string in this example is seperated into 3 parts. The first is `'It'`, the thrid is `'s Ok!'`, and there is a `\'` in between.

#### Double Quote

The variable will be intepreted in the double quotes:

```sh
NAME=xiGUAwanOU
echo "Hello $NAME!"  # Output: Hello xiGUAwanOU!
```

Use `\` before a character to escape it.

#### Backtick

All contents in backticks will be intepreted as a command, and it will be replaced by the standard output of the command:

```sh
echo The time is `date +%H:%M:%S`  # Output: The time is 14:15:36
```
