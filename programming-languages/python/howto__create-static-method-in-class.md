# Create Static Method in Class

```python
class Box:
    def __init__(self, value):
        self.value = value

    @staticmethod
    def of(value):
        return Box(value)
```
