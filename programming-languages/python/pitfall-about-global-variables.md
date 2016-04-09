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
