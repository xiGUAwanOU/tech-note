keywords base64, linux, unix, macos, encode, decode
labels unix, base64

# Unix: Base64 Command

Use following command to encode a string using base64:

```console
$ echo -n "Hello world!" | base64
```

Use `base64 -d` to decode it:

```console
$ echo -n "Hello world!" | base64 | base64 -d
```
