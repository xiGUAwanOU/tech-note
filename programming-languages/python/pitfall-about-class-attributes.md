# Pitfall About Class Attributes

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
