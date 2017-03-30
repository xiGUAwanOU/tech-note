# Base64 Encode & Decode

Use following command to encode a string using base64:

```console
$ echo -n "Hello world!" | base64
```

Use `base64 -d` to decode it:

```console
$ echo -n "Hello world!" | base64 | base64 -d
```
