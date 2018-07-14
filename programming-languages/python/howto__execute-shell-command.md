# Execute Shell Command

The best way is using `subprocess` module.

The following example shows how to run a command and get the result as a string:

```python
string = subprocess.check_output(['echo', 'Hello World!'])
```

If we need to run an interactive command just as if we are running it in a shell, we could simply use the `call` method:

```python
subprocess.call('sudo ls', shell=True)
```
