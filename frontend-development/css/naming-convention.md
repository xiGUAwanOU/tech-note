# Naming Convention

This is a simplified and modified version of a document that I've written for my company.

## Introduction
The main goal of this convention is to make CSS code (or preprocessor language code) (ordered by importance):
1. to have no naming confliction;
2. to be more reusable;
3. to be more readable.

To achieve this, we will introduce a BEM-like naming convention into our frontend projects.

## Conventions

### 1. Vue.js Related Rules
#### 1.1. Style Tag
Use SASS as the style sheet language in the Vue.js `<style>` tag. For example:

```html
<style lang="sass"></style>
```

Do NOT make style `scoped`. If there is a global style definition file and should be imported in multiple components, `scoped` will generate duplicated style classes. However, it is said that the global style definition shouldn't contain any concrete style classes and should only contain stuffs like mixins or variables.

#### 1.2. Common Styles
Highly reusable style definitions, e.g. styles for buttons, tables, etc., should be put into the `src/assets` folder.

### 2. SASS Related Rules
#### 2.1. Using Bootstrap Styles
If we need to use bootstrap styles, we should extend the bootstrap classes. For example:

```sass
.xg-comment-form
  &__text-field
    @extend .form-control
    resize: none
    height: 120px !important
```

Here we have used the `form-control` class from bootstrap.

#### 2.2. D.R.Y.
Using the [power of SASS](https://sass-lang.com/guide) to D.R.Y. up the style codes.

### 3. BEM-like Naming Conventions
We use a modified version of [BEM naming](http://getbem.com/naming/). BEM convention suggests that the class names are made from 3 parts: __Block__, __Element__ and __Modifier__. In our modified version, the definitions of these 3 parts might be different from the official BEM.

#### 3.1. Definitions
The 3 parts are defined as below:
* Block: it could be either a view (e.g. a user profile editing form) or a reusable component (e.g. a button). One block may contain another block, e.g. in the user profile editing form, there could be one or more buttons. It acts as a namespace, so that the detailed namings within the namespace has no effect in the global scope.
* Element: it could be either the block specific layout (e.g. the style of the `div` tag containing the user credential inputs), or the styles of a component which only makes sense within a bigger scope (e.g. the credential editing toggle button in the user profile credential form, without the context of user profile editing, this button makes no sense).
* Modifier: some changes to the existing style definitions (e.g. the credential editing toggle button could look slightly different if the credential editing part is expanded or collapsed).

#### 3.2. Basic Naming Convention
All of these 3 parts should be named using `kebap-case`, and follows the layout `xg-<BLOCK_NAME>[__<ELEMENT_NAME>][--<MODIFIER_NAME>]`. The classes are prefixed with `xg-` because in this way they won't clash with the existing names from the 3rd-party libraries (`xg` stands for "xi gua", watermelon in Chinese).

#### 3.3. Applying to HTML
While applying these styles to HTML tags, we should follow the rules below:
* only blocks and elements could be applied to tags alone. Like

    ```html
    <button class="xg-button">Done</button>
    ```
    ```html
    <div class="xg-user-profile-form__credential-input-container">...</div>
    ```
* modifiers must be applied with the original style class that it modifies. Like
    ```html
    <button class="xg-button xg-button--disabled">Done</button>
    ```
* if a modifier to a reusable style only makes sense within a scope, then it should be prefixed with the specific block name. For example, imagine that we have an activated button which is only used in a test view. The code could be
    ```html
    <button class="xg-button xg-test-view__button--activated">Click me!</button>
    ```

#### 3.4. An All-in-One Example
The following example shows a view which allows user to edit their user profile:
```html
<div class="xg-user-profile-form">
    <div class="xg-user-profile-form__labeled-form-input">
        <label for="user-name-input">User name</label>
        <input type="text" class="xg-user-profile-form__user-name-input" id="user-name-input" />
    </div>
  
    <div class="xg-user-profile-form__labeled-form-input">
        <label for="user-role-select">Role</label>
        <select class="xg-user-profile-form__user-role-select" id="user-roll-select">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select> 
    </div>
    
    <button v-if="!isEditingCredentials" class="xg-button xg-game-server-form__button--expanding-credentials-inputs">
        Edit credentials
    </button>
    <button v-else class="xg-button xg-game-server-form__button--collapsing-credential-inputs">
        Cancel editing credentials
    </button>
    
    <div v-if="isEditingCredentials"
            class="xg-user-profile-form__credential-inputs xg-user-profile-form__credential-inputs--expanded">
        <div class="xg-user-profile-form__labeled-form-input">
            <label for="old-password-input">Old password</label>
            <input type="password" class="xg-user-profile-form__old-password-input" id="old-password-input" />
        </div>
        <div class="xg-user-profile-form__labeled-form-input">
            <label for="new-password-input">New password</label>
            <input type="password" class="xg-user-profile-form__new-password-input" id="new-password-input" />
        </div>
    </div>
    <div v-else class="xg-user-profile-form__credential-inputs xg-user-profile-form__credential-inputs--collapsed">
    </div>
    
    <button class="xg-button xg-button-submit">Save</button>
    <button class="xg-button">Cancel</button>
</div>
```

Note that in the example above:
* The block `xg-user-profile-form` is applied to the top-level `div` tag;
* Within the top-level block, there are several elements like `xg-user-profile-form__labeled-form-input` and `xg-user-profile-form__user-role-select`;
* The block name and element names could be applied to tags alone;
* There are block specific modifiers applied to an element, e.g. `xg-user-profile-form__credential-inputs--expanded`. Although it will make the class attribute very long, they should be applied to the tag together with the element class, like `class="xg-user-profile-form__credential-inputs xg-user-profile-form__credential-inputs--collapsed"`;
* There are block specific modifiers applied to global blocks, e.g. `xg-user-profile-form__button--collapsing-credential-inputs`. They should also be applied with the global block class, like `xg-button xg-user-profile-form__button--collapsing-credential-inputs`;
* There are global modifiers applited to global blocks, e.g. `xg-button xg-button--submit`.

As the style sheet definitions we could write SASS codes like this:

```sass
.xg-user-profile-form
    // top-level block style definitions goes here ...
    
    &__labeled-form-input
        // element style definitions goes here ...
        @extend .col-sm-10 // for extending bootstrap styles

    &__user-role-select
        // element style definitions goes here ...

    &__credentials-inputs
        // element style definitions goes here ...
        
        &--expanded
            // element modifier style definitions goes here ...

    &__button--expanding-credentials-inputs
        // global block modifier style definitions goes here ...
    
    // all other style definitions ...
```
