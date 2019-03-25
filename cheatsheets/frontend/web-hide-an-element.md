keywords hide, invisible, element, html, css, javascript, dom
labels web, html, css, javascript

# Web: Hide an Element
## With HTML
Set the attribute `hidden` to `true` will hide an element. For example:
```html
<img src="/path/to/the/image.png" hidden/>
```

## With CSS
There are at least 3 ways in CSS to hide an element:
1. `display: none`
2. `visibility: hidden`
3. `opacity: 0`

The differences are listed below.

| Method | opacity: 0 | visibility: hidden | display: none |
|:---:|:---:|:---:|:---:|
| occupies sapce? | YES | YES | NO |
| consumes clicks? | YES | NO | NO |
| loads content? | YES | YES | YES |

## With JavaScript
Simply set the attribute of the DOM or the style of the DOM directly:
```javascript
const dom = document.getElementById('hidden-content');

// Change the attribute of the DOM element:
dom.hidden = true;

// Change the style of the DOM:
dom.style.display = 'none';
```
