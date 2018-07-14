# Parse Command-line Arguments

Use `argparse` module:

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("echo", help="string to be printed to the console")
parser.add_argument("square", help="a number to be multiplied by itself",
                    type=int)
parser.add_argument("-v", "--verbose", help="increase output verbosity",
                    action="store_true")

args = parser.parse_args()

print args.echo
print args.square ** 2
if args.verbose:
    print("I won't say nothing.")
```
