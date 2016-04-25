# Test Exception in Unit Test

To test exceptions in `unittest` module in Python, write code like this:

  ```python
with self.assertRaises(RuntimeError) as e:
    grammar = {
        'A' : [['a'], ['B']],
        'B' : [['a'], ['b'], ['B']]
    }

    result = FIRST(grammar, 'A', [])

self.assertEqual(str(e.exception), 'Ambiguous grammar!')
  ```

Notice that to get the message in an exception, simply convert it to a string.
