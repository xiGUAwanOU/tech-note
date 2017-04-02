# `cmd` Module

This module is ideal to create a interactive command line console:

```python
class NewConsole(cmd.Cmd):
    prompt = '> '
    
    def do_hello(self, line):
        """Print hello world."""
        print('hello world')
    
    def do_exit(self, line):
        """Exit the script."""
        print('Bye!')
        exit(0)


if __name__ == '__main__':
    NewConsole().cmdloop()
```
