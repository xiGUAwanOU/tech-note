# Type System
Note that, the types defined in TypeScript will be striped while transpiling. So in the run-time, there is no type check anymore.

## Basic Types
| Name | Code | Example Values or Explanations |
| --- | --- | --- |
| Boolean | `boolean` | `true`, `false` |
| Number | `number` | `3.14`, `6`, `0xf00d`, `0b1010`, `0o744` |
| String | `string` | "blue", 'red' |
| Array | `number[]` or `Array<number>` | `[1, 2, 3]` |
| Tuple | `[string, number]` | `['hello', 10]` |
| Enum | `enum Color {RED, GREEN, BLUE}` | `Color.GREEN` |
| Any | `any` | Can be any value |
| Void | `void` | Usually for functions, no return value |
| Null | `null` | `null` |
| Undefined | `undefined` | `undefined` |
| Never | `never` | Usually for functions, method never returns |
| Object | `object` | `{ prop: 0 }` |

## Force Type Casting
```typescript
let someValue: any = 'A string';
let stringLength: number = (someValue as string).length;
```

## Value Definitions
Use `var`, `let` or `const`. Just as they are in JavaScript.

## Interface
Interface acts as a role to check the "minimum requirement" of the type. The idea is similar to the concept of "duck typing".

### For Data Models
Implicit interface definition:
```typescript
function printName(objectWithName: { name: string }) {
  console.log(objectWithName.name);
}
```

Explicit interface definition:
```typescript
interface NamedValue {
  name: string;
}

function printName(objectWithName: NamedValue) {
  console.log(objectWithName.name);
}
```

Some modifiers can be applied on the interface properties:
```typescript
interface SquareConfig {
  // Optional field, it's OK not to have it:
  color?: string;
  // Readonly field, cannot set value:  
  readonly width: number;
  // Readonly array, cannot push, set item value, etc.:
  readonly tags: ReadonlyArray<string>;
  // Allow extra fields:
  [propName: string]: any;
}
```

### For Functions
Interface can be used to describe a function signature:
```typescript
interface SearchFunc {
  (source: Array<string>, keyword: string): Array<string>;
}

let mySearch: SearchFunc;
mySearch = function(source: Array<string>, keyword: string): Array<string> {
  // ...
}
```

### For Indexable Types
Interface can be used to describe an indexable data structure:
```typescript
interface ColorArray {
    [index: number]: string;
}

let colors: ColorArray;
colors = ['red', 'green', 'blue'];

let color: string = colors[0];
```

In the index type definition `[<index_placeholder>: <index_type>]: <element_type>`:
* `<index_placeholder>` can be freely choosen, just like the parameter name in the function signature;
* `<index_type>`: can only be `number` or `string` (This means that the underlying implementation of indexable types is array, not a hash-like or map-like data sturcture. So why not simply use array then?);
* `<element_type>`: can be anything.

By the way, adding `readonly` to the index type definition will make the array-like data structure readonly.

### For Class Types
Like the interfaces in Java, it can be used to describe a class:
```typescript
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
    // Although it is possible to define the signature of constructor like following, but this is the wrong place:
    // new (hour: number, minute: number): ClockInterface;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(hour: number, minute: number) { }
}
```

In some rare cases we need the classes that have implemented this interface to have the expected signature. To do so, we need a separated interface only for their constructors:
```typescript
interface ExpectedConstructor {
  new (name: string, tags: Array<string>): SomeInterface;
}

function createObject(ctor: ExpectedConstructor, name: string, tags: Array<string>): SomeInterface {
    return new ctor(name, tags);
}

let something = createObject(ClassHasExpectedConstructor, 'Name', ['tag1', 'tag2']);
```
