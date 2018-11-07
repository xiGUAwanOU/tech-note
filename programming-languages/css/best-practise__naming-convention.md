# Naming Convention
Previously I was following the BEM convention in a somehow incorrect way. Have reconsidered it, and recorded the conclusion here.

## Introduction
The main goal of this convention is to make CSS code (or preprocessor language code) (ordered by importance):
1. to have no naming confliction;
2. to be more reusable;
3. to be more readable.

## BEM
BEM convention requires a class name to be composed by 3 different parts following this format: `block[__element][--modifier]`.

## Choose the Block Carefully
Block must be the __smallest__ stand-alone and reusable component, e.g. button, table, etc.. The reason is, if we don't do this, potentially we could have a situation that in two different blocks (say they are `block-a` and `block-b`), there are two elements (say they are `element-a` and `element-b`) having exactly the same style.

This will cause the repetation of the style code, because they should have different class names according to BEM: `block-a__element-a` and `block-b__element-b`, but they have exactly the same style definitions.

If the blocks are the smallest stand-alone and reusable components, this situation is not likely to happen. Even if it happens, the repeated style snippet would not have a stand-alone meaning. For example, even if the style of the row of the table is exactly the same to an item in the ordered list, it probably doesn't make sense to extract this part of codes to a separated class.

Based on this, we can introduce the BEM convention.

Actually Bootstrap is somehow based one this. We have `panel` as a block, and `panel-default` which is a modifier applied on panel, and also `panel-heading` which is a element in `panel` without stand-alone meaning.

## "Inherit" Existing Styles
Use `@extend` too much for extending existing classes will cause the explosion of the class number, which is also totally unnecessary. If it is an existing class, apply it directly on the HTML tag, and append the class that adding extra styles will do the thing.

But if part of the style definition in the classes is shared in many places, it would be better to make it as a mixin, including mixins only containing plain style definitions won't increase the number of classes.

## Vue.js Scoped Style Tag
In theory it should always be there. All the reusable styles should be extracted as a new block, or written as a mixin. As a result, all the remaining style definitions are actually component specific.

## To Sum It Up
1. Don't import a file containing concrete style classes everywhere;
2. To extend an existing class, simply append new class after the existing class;
3. Avoid using BEM everywhere to keep the class name short, only use it for global classes;
4. Use Vue.js `scoped` attribute wisely, so that the class name in the component won't polute the global naming sapce.
