# Pitfall About Global Variables

Say, there are two python source code files:

  ```python
# In test1.py
a = 1
def aPlusPlus():
  global a
  a += 1
  ```

  ```python
# In test2.py
from test1 import *
# from test1 import a, aPlusPlus - is the same
print(a)
aPlusPlus()
print(a)
  ```

And run the scripts in console:

  ```console
$ python3 test2.py
1
1
  ```

However, if we write `import test1`, `test1.a` and `test1.aPlusPlus()`, the result is:

  ```console
$ python3 test2.py
1
2
  ```

The reason of the different behaviour is `from ... import ...` will __copy the global variables by values__ (not by references), which means the `a` in `test1.py` and `a` in `test2.py` are actually different objects. However, although `aPlusPlus` in `test1.py` and `test2.py` are different objects, they still refer to the same function (I guess so... I've not read the source code of python interpreter yet). As a result, the call to `aPlusPlus()` will only update the `a` object in `test1.py`, while `print(a)` will print the value of `a` object in `test2.py`, so the second result printed is `1`.

With `import ...`, things are different. It just __make the references__ to `a` and `aPlusPlus` __availabe__ in `test2.py`, but will not copy them. Thus, the object updated by `test1.aPlusPlus()` and printed by `print(test1.a)` are actually the same, so the second result printed is `2`.
