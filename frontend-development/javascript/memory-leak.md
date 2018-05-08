# Memory Leak

Start from 2012, all of the main-stream web browsers have implemented "mark-and-sweep" algorithm for collecting garbages.

So, it is said that:

> The main cause for leaks in garbage collected languages are unwanted references.

There are 3 patterns of memory leak mentioned in [this article](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/) (the 4th pattern metioned in the original article is actually an implementation issue, which will be probably improved in the future).

## 1. Accidental global variables

```javascript
function foo(arg) {
  bar = "this is a hidden global variable"
}
```

Bar is now defined as a global variable, which is the same to:

```javascript
function foo(arg) {
  window.bar = "this is an explicit global variable"
}
```

Or this:

```javascript
function foo() {
  this.bar = "potential accidental global, depends on where the method is bound to"
}

foo()
```

## 2. Forgotten timers or callbacks

```javascript
var someResource = getData()
setInterval(function() {
  var node = document.getElementById('Node')
  if (node) {
    // Do stuff with node and someResource
    node.innerHTML = JSON.stringify(someResource))
  }
}, 1000)
```

At some point, the element represented by `node` could be deleted, which will make this interval handler useless. However variable `someResource` will never be released, because they are reachable from the activated callback.

## 3. Out of DOM references

DOM references could be kept in some data structures that will not be released.

```javascript
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
}

function doStuff() {
    image.src = 'http://some.url/image'
    button.click()
    console.log(text.innerHTML)
}

function removeButton() {
    // The button is a direct child of body.
    document.body.removeChild(document.getElementById('button'))
}
```

The button element won't be released, since it is deleted from the DOM tree, but not from the `elements` object.
