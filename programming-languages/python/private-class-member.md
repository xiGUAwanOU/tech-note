# Private Class Member

There is no private class member in Python, but there is a trick to achieve this. If a class member (attribute or method) has a prefix `__`, for example `__logger` or `__connection`, the member is private.

To make those prefixed members more private, Python even changes those names automatically. For example:

```python
class Example:
    def __init__(self):
        self.__message = 'Hello world!'

e = Example()
print(e._Example__message)
```

The string `'Hello world!'` is printed. So it's easy to figure out that Python has changed the variable name `__message` to `_Example__message`.
