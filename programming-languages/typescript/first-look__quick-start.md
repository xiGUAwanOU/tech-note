# Quick start
This article will cover information about how to transpile TypeScript code to JavaScript.

Just do the following:
```console
$ npm install -g typescript
```

Write the TypeScript source code file:
```typescript
// say_hello.js
function sayHello(name: string) {
    return `Hello ${name}!`;
}

let userName = 'world';

console.log(sayHello(userName));
```

And transpile it to JavaScript code:
```console
$ tsc say_hello.ts
$ ls
say_hello.js say_hello.ts
```

Run it with `node`:
```console
$ node say_hello.js
Hello world!
```
