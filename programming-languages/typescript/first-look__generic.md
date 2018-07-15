# Generic
Remember that all the type information in TypeScript is resolved in the transpiling stage.

## Basic
A simple example using generic:
```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

## Type Constraint
By only specifying a `T`, TypeScript won't know what is it and how should the value look like:
```typescript
function loggingIdentity<T>(arg: T): T {
  console.log(arg.name); // No .name in T
  return arg;
}
```

It will be fine like this:
```typescript
interface NamedValue {
  name: string;
}

function loggingIdentity<T extends NamedValue>(arg: T): T {
  console.log(arg.name);
  return arg;
}
```

## Misc. Usages
There are several examples showing more about generic:
```typescript
// Key type of an indexable data structure
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Constructor type
function create<T>(ctor: { new(): T; }): T {
  return new ctor();
}
```
