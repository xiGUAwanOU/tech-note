# Suprises in Python

There are many suprises in Python =)

## 1. About Default Parameter Value

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

## 2. About Class Attributes

See the example below:

  ```python
class A:
    x = 1

class B(A):
    pass

class C(A):
    pass
  ```

Now, let's try:

  ```python
print(A.x, B.x, C.x) # 1 1 1
  ```

Then, assign the `x` value in `B`:

  ```python
B.x = 1
print(A.x, B.x, C.x) # 1 2 1
  ```

Now, assign the `x` value in `C`:

  ```python
C.x = 3
print(A.x, B.x, C.x) # 3 2 3
  ```

It seems that the assignment of `B.x` has created something new in `B`, however `C` is still using the value in `A`.

## 3. About Multiprocessing Pool

The `Pool` class in `multiprocessing` package is a cool thing in Python. However, there are also many pitfalls related to this thing:

  ```python
def f(x):
    return x*x

with Pool(5) as p:
    print(p.map(f, [1, 2, 3]))
  ```

Run this on Windows, and there will be exceptions continuously showing up. The main problem is actually there MUST be an `if`-statement checking whether the `__name__` field is equal to `'__main__'`.

This problem occurs only on a Windows machine. Because Windows doesn't have a `fork` system call, so the only way to distinguish parent and children processes is `'__main__'`. Otherwise, a child process will also start at the same start point as the parent process, this will usually cause the spawning of grandchildren processes. As a result, the program becomes a process bomb.

So, always add `if __name__ == '__main__'` for the entry point of Python scripts.

## 4. About Global Variables

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
$ python test2.py
1
1
  ```

However, if we write `import test1`, `test1.a` and `test1.aPlusPlus()`, the result is:

  ```console
$ python test2.py
1
2
  ```

The reason of the different behaviour is `from ... import ...` will __copy the global variables by values__ (not by references), which means the `a` in `test1.py` and `test2.py` are actually different objects (immutable types). However, although `aPlusPlus` in `test1.py` and `test2.py` are different variables, they still refer to the same function (mutable types) (I guess so... I've not read the source code of python interpreter yet). As a result, the call to `aPlusPlus()` will only update the `a` object in `test1.py`, while `print(a)` will print the value of `a` object in `test2.py`, so the second result printed is `1`.

With `import ...`, things are different. It just __make the references__ to `a` and `aPlusPlus` __availabe__ in `test2.py`, but will not copy them. Thus, the object updated by `test1.aPlusPlus()` and printed by `print(test1.a)` are actually identical, so the second result printed is `2`.

## 5. About Lambda Expressions and List Comprehension

Read the code below:

  ```python
def create_multipliers():
    return [lambda x : i * x for i in range(5)]
for multiplier in create_multipliers():
    print(multiplier(2))
  ```

Instead of：

  ```text
0
2
4
6
8
  ```

The result is actually:

  ```text
8
8
8
8
8
  ```

This is because the closures in Python are __late binding__, which means that the values of variables used in closures are looked up at the time the inner function is called.

The following code could help us to understand this:

  ```python
def create_multipliers():
    multipliers = []

    for i in range(5):
        def multiplier(x):
            return i * x
        multipliers.append(multiplier)

    return multipliers
  ```

At the time that the inner `multiplier` function is called, the `for` statement has already finished its running, so the `i` should be `4`. This is why all the functions are returning 8.
