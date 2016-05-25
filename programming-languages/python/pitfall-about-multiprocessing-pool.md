# Pitfall About Multiprocessing Pool

The `Pool` class in `multiprocessing` package is a cool thing in Python. However, there are also many pitfalls related to this thing:

  ```python
def f(x):
    return x*x

with Pool(5) as p:
    print(p.map(f, [1, 2, 3]))
  ```

Run this, and there will be exceptions continuously showing up. The main problem is actually there MUST be an `if`-statement checking whether the `__name__` field is equal to `'__main__'`.

This problem occurs only on a Windows machine. Because Windows doesn't have a `fork` system call, so the only way to distinguish parent and children processes is `'__main__'`. Otherwise, a child process will also start at the same start point as the parent process, this will usually cause the spawning of grandchildren processes. As a result, the program becomes a process bomb.

So, always add `if __name__ == '__main__'` for the entry point of Python scripts.
