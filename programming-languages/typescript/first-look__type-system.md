# Type System
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
__TBC__
