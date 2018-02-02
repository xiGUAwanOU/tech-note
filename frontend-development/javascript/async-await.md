# Async and Await

In ECMAScript 2017 Specification, `async` and `await` becomes two standard keywords.

In [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), they are clearly explained:

> When an `async` function is called, it returns a `Promise`. When the `async` function returns a value, the `Promise` will be resolved with the returned value.  When the `async` function throws an exception or some value, the `Promise` will be rejected with the thrown value.
> 
> An `async` function can contain an `await` expression, that pauses the execution of the `async` function and waits for the passed `Promise`'s resolution, and then resumes the `async` function's execution and returns the resolved value.

An example goes below:

```javascript
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});
```

The `then` call after the call of `add1` function means that the `async` function will return a `Promise`. In `async` function there are two `await`s, they wait for the `Promise` returned by `resolveAfter2Seconds` one by one.
