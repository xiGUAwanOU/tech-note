# Some Facts About `for` Loop

See the following Python code:

```python
def get_array():
    print("function called")
    return [2, 3, 5, 7, 11]

for i in get_array():
    print("current number: " + str(i))
```

The function `get_array` will only be called once, so that the text "function called" will only be printed once, like:

```text
function called
current number: 2
current number: 3
...
```

However, if it is a generator instead of returning a list directly:

```python
def get_array():
    print("entering function")
    for i in [2, 3, 5, 7, 11]:
        print("inside the loop")
        yield i

for i in get_array():
    print("current number: " + str(i))
```

In this case, the text "entering function" will only be printed once, however "inside the loop" and "current number: ..." will be printed one after another like:

```text
entering function
inside the loop
current number: 2
inside the loop
current number: 3
inside the loop
...
```

I guess what `yield` is doing is keep the current context of a function while returning a result. Once the next value is required, the context of the function will be recovered and continue running, until it reaches the next `yield` call and return another result.
