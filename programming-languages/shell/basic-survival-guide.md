# Basic Survival Guide
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

### 2. Variables

Simple, just like this:

```sh
NAME=xiGUAwanOU
```

### 3. Some Words About Quotes

There are three kinds of quotes in bash shell: single quote `'`, double quote `"` and backtick `\``.

#### Single Quote

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

### 4. User Input

To get the user input, we could use `read` command to read user inputs into a variable:

```sh
echo -n "Please enter the password: "
read PASSWORD
echo "Your password is: $PASSWORD. Now I know it!"
```

### 5. If Statement

An `if` statement in shell script could be like this:

```sh
echo -n "Please enter the password: "
read PASSWORD

if [ "$PASSWORD" = "nopassword" ]; then
# Or write "then" here...
  echo "Hey! How do you know the password?!"
else
  echo "Password is wrong, your computer will explode in 5 minutes."
fi
```

Notice the position of the whitespace and the semicolon between `]` and `then`. We could also write `then` to the next line of `if`, in this case we don't need semicolon any more.

If condition (argument patterns of `[` command) list:

| String Comparison  | Description |
| ------------------ | ----------- |
| Str1 = Str2        | Returns true if the strings are equal |
| Str1 != Str2       | Returns true if the strings are not equal |
| -n Str1            | Returns true if the string is not null |
| -z Str1            | Returns true if the string is null |

| Numeric Comparison | Description |
| ------------------ | ----------- |
| expr1 -eq expr2    | Returns true if the expressions are equal |
| expr1 -ne expr2    | Returns true if the expressions are not equal |
| expr1 -gt expr2    | Returns true if expr1 is greater than expr2 |
| expr1 -ge expr2    | Returns true if expr1 is greater than or equal to expr2 |
| expr1 -lt expr2    | Returns true if expr1 is less than expr2 |
| expr1 -le expr2    | Returns true if expr1 is less than or equal to expr2 |
| ! expr1            | Negates the result of the expression |

| File Conditionals  | Description |
| ------------------ | ----------- |
| -d file            | True if the file is a directory |
| -e file            | True if the file exists (note that this is not particularly portable, thus -f is generally used) |
| -f file            | True if the provided string is a file |
| -g file            | True if the group id is set on a file |
| -r file            | True if the file is readable |
| -s file            | True if the file has a non-zero size |
| -u                 | True if the user id is set on a file |
| -w                 | True if the file is writable |
| -x                 | True if the file is an executable |

### 6. For Statement

The `for` statement in shell script is simple:

```sh
for VAR in whitespace seperated string
do
  echo $VAR
done
# Output:
# whitespace
# seperated
# string
```

### 7. While Statement

The `while` statement:

```sh
echo -n "Enter the password: "
read PASSWORD

while [ "$PASSWORD" != "nopassword" ]
do
  echo -n "Wrong password. Enter the password again: "
  read PASSWORD
done

echo "Welcome!"
```
