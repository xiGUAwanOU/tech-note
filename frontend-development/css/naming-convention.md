# Naming Convention

## What?

Main problems to be solved by the naming convention:
1. prevent the naming collision;
2. prevent the duplicated code.

## Why?

The reason of preventing the naming collision should be clear. Imagine there are two totally different UI element, but having same "upload" CSS class. Once we put this two elements into one page, the style will be messed up.

For the second point, if we generate duplicated code, we will not only have a bad time to unify the look of UI elements across the whole website, but also generate huge CSS files and slow down the loading of the page.

## How?

I think BEM is a good start point. However, the official definition of BEM is somehow vague, it needs to be clarified, at least for myself.

* __Block__: just like a namespace. For example:
  1. reusable UI elements, e.g. button, text input, table, search box (with a text input, a button doing search and a table showing results), etc.
  2. a certain page or a page area.
* __Element__: classes that we don't want them to leak into the global naming spaces. They could be divided into two groups:
  1. layout: controlls where to put UI elements.
  2. style: controlls how the UI elements look like.
* __Modifier__: small changes to block or element.

More details:
* I think it is a good practise to distinguish between layout and style (but not 100% sure). So I think it is better to infix the layout element with `layout` after the splitter between block and element. E.g. `block__layout-right-column`.
* Layout shouldn't be reused, so I treat it as an element-leveled thing, even if there would be many duplicated code. Because once reused, it will be hard to change it without causing any problem.
* If button, text input, etc. could be blocks, it definitely makes sense to apply modifiers on blocks, just as it is shown in the BEM official website.
* If there is a modifier for a child block (`child-block`) only used in one parent block(`parent-block`), it might still make sense to make the modifier global `child-block child-block__modifier` for further reusing possibilities. If we are 100% sure that this will not happen outside the parent block, we could apply following classes `child-block parent-block__child_block--modifier`.

All-in-one example:

```html
<div class="search-page">

  <div class="search-page__layout-head">
    <h1>Whatever</h1>
  </div>

  <div class="search-page__layout-body">
    <div class="search-box">
      <div class="search-box__layout-upper-row">
        <input class="text-input"></input>
        <button class="submit-button search-box__submit-button--color-yellow">Go!</button>
      </div>
      <div class="search-box__layout-lower-row">
        <table class="table table--hover">...</table>
      </div>
    </div>
  </div>

  <div class="search-page__layout-footer">
    Some copyright information ...
  </div>

</div>
```

## Brainstorming Log

The part below might only make sense to myself:

<details>
  
```text
以控件为单位。
控件是可复用的页面元素。
如果控件里面包含了其他控件怎么办？例如一个搜索框加结果的控件就是由文本框、按钮和列表组成的。
直接拿其它的控件class来用嘛？
肯定是要直接拿其它的控件来用的。不然的话，万一改了某一个控件的风格，岂不是所有包含了这个控件里面的class都要改？
那如果父控件需要对它包含的子控件进行一些小修改怎么办？
这种小修改应该属于这个父控件，还是属于它包含的子控件呢？
如果让它属于它包含的子控件的话，似乎是一个更好的选择。因为如果把这种修改限制在父控件的范围内，一旦有另外的父控件也要对其进行相同的更改的话，就需要提出这部分相同的更改了。

分离布局与风格，这点似乎不错。
要有不同的class来处理一个控件放在哪里，以及看上去是什么样子。这确实是两件完全不同的事情。
布局与风格有不同的尺度。例如，一个最小的控件基本上只会有风格，很难有布局；一个由若干子控件组成的父控件，就需要对其子控件进行布局，而它也有可能有自己的风格；一个页面由不同的控件组成，它就需要对其中的控件进行布局，而它自己就很难有自己的风格了。

所以该怎么设计这个convention？
采纳BEM的话，Block就应该起到类似于namespace的作用了。定义Block的动机是要不让其中的名称流进全局范围内。而且Block应该是可以复用的最小单位。 
Element不能复用，因为Element出了Block就失去了它的意义。
Modifier就没什么好说的了。
Layout与Element应该处于不同的维度上，但是Layout确实与Block有密切的联系。因为Layout出了Block之后往往就变得“非常没有意义”。

鉴于以上这些思考，可以考虑搞这样一个convention。
有四个要点：Block、Layout、Element、Modifier。
Block必须是可以复用的UI元素，可以由子Block组成。
Layout必须被限制在Block内，并且无法被复用（感觉复用Layout很危险，没有意义，想象一下更改bootstrap里面col-xs-6的实现的后果），出了Block之外就没有意义了。
Element与Layout类似，不过Element应该只与样式有关，而不应该与布局有关。
最后Modifier没什么好说的。

但是实际到了应用中，Layout和Element又有什么区别呢？都要被Block所限制其作用范围，所以就都放在__后面好了。
一定要区分Layout和Element的话，就在__后面加layout，比如说block__layout-right-column之类的。
或者简单点，只加l？
```

</details>

