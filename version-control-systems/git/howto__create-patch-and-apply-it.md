# Create Patch and Apply It

```console
$ git diff > a.patch
$ git apply a.patch
```

If change has already been staged, use following command to generate patch:
```console
$ git diff --cached > a.patch
```
