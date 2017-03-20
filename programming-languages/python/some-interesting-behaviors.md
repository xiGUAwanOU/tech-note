# Some Interesting Behaviors

The function `get_array` will only be called once:

  ```python
def get_array():
    print("function called")
    return [2, 3, 5, 7, 11]

for i in get_array():
    print("current number: " + str(i))
  ```
