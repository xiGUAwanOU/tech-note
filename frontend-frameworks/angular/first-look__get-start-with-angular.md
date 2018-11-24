# Get Start with Angular

## 1. Installation and Initialization

```shell
$ npm install -g @angular/cli
$ ng new new-project
```

Even though I've chosen pure CSS as the style sheet language, SASS is still built and installed, don't know why.

## 2. Project Structure

* `e2e`: end-to-end test contents;
* `src`: all source codes;
  * `app`: the initial module created with the project (`*.spec.ts` files are unit tests, stored along with the source code files);
  * `assets`: static contents;
  * `environments`: configurations of the environments (e.g. production, development, testing, etc.);

All the other files are either global static contents, or configurations files. From these configuration files, one can figure out that Angular project is using TypeScript as the main scripting language, Webpack under the hood for the final packaging, and Karma + Jasmine for unit tests.

## 3. Up and Running

```shell
ng serve --open
```

Option `--open` is for opening a browser tab.

## 4. Detailed Structures

* `*.module.ts`: module definition and configuration file. I guess a module is a set of components, which are logically related to each other.
* `*.component.ts`: component definition file. It glues the HTML, CSS and TypeScript together, also provides a selector, specifying which tag should this component be attached to.
* `*.component.spec.ts`: unit test of the component.
* `*.component.html`: HTML, or template of the component.
* `*.component.css`: style sheet of the component.

In one word, it simply splits the SFC in Vue.js into different files.
