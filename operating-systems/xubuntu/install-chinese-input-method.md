# Install Chinese Input Method

The most popular input method framework for Chinese input methods currently on Xubuntu should be `fcitx` (instead of `ibus`). To install it:

```console
$ sudo apt-get install fcitx fcitx-googlepinyin
```

After installation, we may need to set default input method to `fcitx`. To do this:

  1. `Startmenu --> Settings --> Language Support`;
  2. Change `Keyboard input method system` to `fcitx`;
  3. Close the `Language Support` setting window;
  4. restart X (logout and login again should work).

After this, an input method logo will show up at the right top corner of the screen.
