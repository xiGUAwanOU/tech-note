# Ubuntu Power Saving Settings

Firstly install `powertop` system tool:

```console
$ sudo apt-get install powertop
```

And use the `--auto-tune` option of `powertop`:

```console
$ sudo powertop --auto-tune
```

Besides, `powertop` is a useful power consumption monitor.

We could even use less power with `pm-powersave`. Firstly we should install `pm-utils`:

```console
$ sudo apt-get install pm-utils
```

And then enable the `pm-powersave`:

```console
$ sudo pm-powersave true
```
