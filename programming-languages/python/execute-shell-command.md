# Execute Shell Command

The best way is using `subprocess` module.

The following example shows how to run a command and get the result as a string:

  ```python
string = subprocess.check_output(["echo", "Hello World!"])
  ```
