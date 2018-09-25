# Write Setter and Getter in Python

```python
class Box:
    def __init__(self, value):
        self.value = value

    @property
    def value(self):
        return self.__value
    
    @value.setter
    def value_setter(self, value):
        self.__value = value
```
