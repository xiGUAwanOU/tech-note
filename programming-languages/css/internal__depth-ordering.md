# Depth Ordering
Currently never had any problem with this, but maybe will have problem in this area later.

## Positioned and Non-positioned Elements
Positioned elements are these with non-default position attribute (other than `static`) in CSS class definitions.

```html
<div class=”pink”>
  <div class=”orange”></div>
  <div class="purple"></div>
</div>
<div class=”blue”></div>
<div class=”green”></div>
```

```css
.blue, .pink, .orange, .purple {
  position: absolute;
}
```

In the example above, `.blue`, `.pink`, `.orange` and `.purple` are positioned elements.

## Default Order
By default, the z-index order is:
1. root element (the html element)
2. non-positioned elements in the order they are defined
3. positioned elements in the order they are defined

In the example above, the depth order (from bottom to top) is:
1. `.green`: non-positioned element;
2. `.pink`: positioned, depth ordered by its element order;
3. `.orange`: positioned, depth ordered by its element order;
4. `.purple`: positioned, depth ordered by its element order;
5. `.blue`: positioned, depth ordered by its element order;

## Z-index
Z-index only have effect on positioned elements.

```css
.blue, .pink, .orange {
  position: absolute;
}
.blue {
  z-index: 2;
}
.orange {
  z-index: 3;
}
.purple {
  z-index: 4;
}
.green {
  z-index: 100; // has no effect since the green box is non-positioned
}
```

With the CSS shown above, the depth order (from bottom to top) is:
1. `.green`
2. `.pink`
3. `.blue`
4. `.orange`
5. `.purple`

## Stack Context
The effect of z-index is affected by the parent element of an element. If there is a z-index defined in the parent element, a stack context is formed, the z-index attribute of the children elements only have affect within the stack context.

```css
.blue, .pink, .orange {
  position: absolute;
}
.pink {
  z-index: 1;
}
.blue {
  z-index: 2;
}
.orange {
  z-index: 3; // Within stack context 1
}
.purple {
  z-index: 4; // Within stack context 1
}
.green {
  z-index: 100;
}
```

With the CSS shown above, the depth order (from bottom to top) is:
1. `.green` (z-index: 100)
2. `.pink` (z-index: 1)
3. `.orange` (z-index: 3 within stack context 1)
4. `.purple` (z-index: 4 within stack context 1)
5. `.blue` (z-index: 2)

Sometimes, the stack context will be formed implicitly by applying [some CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). And it seems that it is applying the default `z-index` value (0) if not specified.

```css
.blue, .pink, .orange {
  position: absolute;
}
.pink {
  transform: rotate(0);
}
.blue {
  z-index: 2;
}
.orange {
  z-index: 3; // Within stack context 0
}
.purple {
  z-index: 4; // Within stack context 0
}
.green {
  z-index: 100;
}
```

With the CSS shown above, the depth order (from bottom to top) is:
1. `.green` (z-index: 100)
2. `.pink` (z-index: 1)
3. `.orange` (z-index: 3 within stack context 0)
4. `.purple` (z-index: 4 within stack context 0)
5. `.blue` (z-index: 2)
