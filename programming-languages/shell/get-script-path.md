# Get Script Path

Use following snippet to get the script path, it will follow symlink and it works on Linux and MacOS:

```bash
SCRIPT_PATH=$(if [ -L $0 ]; then dirname $(readlink $(if [ "$OSTYPE" = "linux*" ]; then echo "-f"; fi) $0); else dirname $0; fi)
```
