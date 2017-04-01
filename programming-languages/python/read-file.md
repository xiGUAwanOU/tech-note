# Read File

To read file line by line, simply iterate over the file object:

```python
with open(input_file_path, 'r') as input_file:
    for line in input_file:
        # Do some processing here...
```

To read the whole file:

```python
with open(input_file_path, 'r') as input_file:
    content = input_file.read()
```
