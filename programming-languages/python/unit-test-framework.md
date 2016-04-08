# Unit Test Framework

There is already a unit test framework in Python standard library called `unittest`. This document is a start guide of the `unittest` package.

A common project folder would be like this:

  ```text
project
|--pack
|  `--MyClass.py
`--test
   `--TestMyClass.py
  ```

`MyClass` is the class to be tested, and the `TestMyClass` is the testing class.

The content of `MyClass`:

  ```python
class MyClass:
  def getInt(self):
    return 42
  ```

And the content of `TestMyClass`:

  ```python
import unittest
import MyClass

class TestMyClass(unittest.TestCase):
  def setUp(self):
    self.myClass = MyClass.MyClass()

  def testGetInt(self):
    self.assertEqual(self.myClass.getInt(), 42)
  ```

Notice that the `setUp` method is used for build the fixture, there is also a `tearDown` method to destroy old contexts.

To run the test, simply use the command below:

  ```console
$ cd pack
$ python -m unittest discover -p "Test*.py" ../test
  ```

Notice that we firstly go to the `pack` folder, where our source code files are located. And then we call the `unittest` module to discover the tests in the test source code folder.

If everything is Ok, there will be the output:

  ```text
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
  ```
