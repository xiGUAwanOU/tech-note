# Responsive Web Design

Something like this will do the trick:

  ```css
@media only screen and (min-width: 30em) {
    body {
        background: red;
        font-size: 0.75em;
    }
}

@media only screen and (min-width: 48em) {
    body {
        background: yellow;
        font-size: 0.85em;
    }
}

@media only screen and (min-width: 71.25em) {
    body {
        background: green;
        font-size: 1em;
    }
}
  ```
