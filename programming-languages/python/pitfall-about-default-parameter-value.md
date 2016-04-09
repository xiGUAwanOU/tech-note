# Pitfall About Default Parameter Value

See the source code below:

  ```python
class SimpleClass:
  def __init__(self):
    self.i = 42

def func(a = SimpleClass()):
  print(a.i)
  a.i = 43

func()
func()
  ```

What will the result printed? Intuitively I would say it is two lines of `42`, but actually it is `42` and `43`. This means that the `SimpleClass()` written as the default parameter value of the `func` function will be called only once. After the first call, the return value of the constructor call will be reused. As a result, the `a` in two calls to `func()` are actually refer to the same object, so the second line printed is `43`.
