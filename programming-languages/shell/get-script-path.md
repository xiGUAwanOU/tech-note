# Get Script Path

Use following snippet to get the script path:

```bash
SCRIPT_PATH=$(dirname $(readlink $(if [ "$OSTYPE" = "linux*" ]; then echo "-f"; fi) $0))
```
