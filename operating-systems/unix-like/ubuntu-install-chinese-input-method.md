# Ubuntu Install Chinese Input Method

The most popular input method framework for Chinese input methods currently on Ubuntu should be `fcitx` (instead of `ibus`). To install it:

```console
$ sudo apt-get install fcitx fcitx-googlepinyin
```

After installation, we may need to set default input method from `ibus` to `fcitx`. To do this:

  1. search "input method" in the start menu;
  2. open "Input Method" application;
  3. click "OK" and then "Yes";
  4. choose "fcitx" in the list and clike "OK";
  5. click "OK" once again;
  6. restart X (logout and login again should work).

After this, an input method logo will show up at the right top corner of the screen.
