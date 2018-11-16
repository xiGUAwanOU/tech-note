# Depth Ordering
Currently never had any problem with this, but maybe will have problem in this area later.

## 0. Positioned and Non-positioned Elements
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

## 1. Default Order
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

## 2. Z-index
Z-index only have effect on positioned elements.

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
1. `.green`: non-positioned element;
2. `.pink`: positioned, default z-index;
3. `.blue`: positioned, ordered by z-index;
4. `.orange`: positioned, ordered by z-index;
5. `.purple`: positioned, ordered by z-index;

## 3. Stack Context
The effect of z-index is affected by the parent element of an element. If there is a z-index defined in the parent element, a stack context is formed, the z-index attribute of the children elements only have affect within the stack context.

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
1. `.green`: non-positioned element;
2. `.pink`: positioned element, ordered by z-index;
3. `.orange`: embedded positioned element, affected by stack context (z-index: 1), ordered by z-index;
4. `.purple`: embedded positioned element, affected by stack context (z-index: 1), ordered by z-index;
5. `.blue`: positioned element, ordered by z-index;

Sometimes, the stack context will be formed implicitly by applying [some CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). And it seems that it is applying the default `z-index` value (0) if not specified.

```css
.blue, .pink, .orange, .purple {
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
1. `.green`: non-positioned element;
2. `.pink`: affected by transform property, default z-index value applied;
3. `.orange`: embedded positioned element, affected by stack context (default z-index), ordered by z-index;
4. `.purple`: embedded positioned element, affected by stack context (default z-index), ordered by z-index;
5. `.blue`: positioned element, ordered by z-index;
