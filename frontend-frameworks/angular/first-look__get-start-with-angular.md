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
