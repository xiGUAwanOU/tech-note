# Advanced Types
## Type Interception and Union
Say, one value is "named", if it has a name. And one value is "loggable", if it can provide log message. An arbitrary value must be in one of these four cases:
1. value is "named" and "loggable";
2. value is "named", not "loggable";
3. value is "loggable", not "named";
4. value is neither "named", nor "loggable".

Sometimes, we explicitly want a value to be in case 1. This can be described with type interception:
```typescript
interface NamedValue {
  name: string
}

interface LoggableValue {
  logMessage: string
}

function logValue(value: NamedValue & LoggableValue): void {
  console.log(`${value.name} says "${value.logMessage}"`)
}
```

Sometimes, we explicitly want to cover case 1, 2 and 3. This can be described with type union:
```typescript
interface NamedValue {
  name: string
}

interface LoggableValue {
  logMessage: string
}

function logValue(value: NamedValue | LoggableValue): void {
  // How to distinguish between NamedValue and LoggableValue?
}
```

## User-Defined Type Guard
In the example above, the biggest problem is to distinguish between `NamedValue` and `LoggableValue`. We have to keep it in mind, that the type information is restricted to transpile stage. After that, JavaScript won't have any idea about if a value is "named" or "loggable".

To overcome this problem, programmers have to take over the responsibility to decide if a value is "named" or "loggable":
```typescript
function isNamedValue(value: NamedValue | LoggableValue): value is NamedValue {
    return (<NamedValue>value).name !== undefined;
}

function isLoggableValue(value: NamedValue | LoggableValue): value is LoggableValue {
    return (<LoggableValue>value).logMessage !== undefined;
}

function logValue(value: NamedValue | LoggableValue): void {
  if (isNamedValue(value)) {
    console.log(`My name is ${value.name}.`);
  }
  if (isLoggableValue(value)) {
    console.log(`I want to say "${value.logMessage}"`);
  }
}
```

## Null and Undefined Values
First of all, `--strictNullChecks` option is a __MUST HAVE__!!

Like the `Optional` in Java, or `?` in Kotlin, TypeScript has its own way to ensure that `null` value and `undefined` values are treated properly. With `--strictNullChecks`, one cannot explicitly assign null value to a variable which has non-null types. To allow null values, one must explicitly append `| null` in the type definitions.

An example of null value handling:
```typescript
function isNamedValue(value: any): value is NamedValue {
    return value !== null && (<NamedValue>value).name !== undefined;
}

function isLoggableValue(value: any): value is LoggableValue {
    return value !== null && (<NamedValue>value).name !== undefined;
}

function logValue(value: NamedValue | LoggableValue | null): string {
  if (isNamedValue(value)) {
    return `My name is ${value.name}.`;
  }
  if (isLoggableValue(value)) {
    return `I want to say "${value.logMessage}"`;
  }
  return ''
}
```

Bonus, a tiny trick to handle null value in-place:
```typescript
let value = functionMigthReturnNull() || 'default value';
```

## Type Aliases
### Basic Usages
```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
```

### Differences Between Aliases and Interfaces
1. Interfaces have their own names, while aliases will be substituted in the pre-transpile stage (somehow like a macro).
2. Aliases cannot be implemented or extended.

### Literal Values
This restricts the value in the transpile time. For example:
```typescript
// String literals
type Color = 'red' | 'green' | 'blue';
let color = 'yellow';  // Nope, this won't work

// Number literals
type DieNumber = 1 | 2 | 3 | 4 | 5 | 6;
```

### Discriminated Unions
This is yet another solution to the run-time type guard. Discriminated unions have 3 ingredients:
1. Types that have a common, singleton type property — the discriminant.
2. A type alias that takes the union of those types — the union.
3. Type guards on the common property.

```typescript
interface Square {
    kind: 'square'; // Discriminant
    size: number;
}
interface Rectangle {
    kind: 'rectangle'; // Discriminant
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle'; // Discriminant
    radius: number;
}

type Shape = Square | Rectangle | Circle; // Union

function area(s: Shape) {
    switch (s.kind) { // Type guards
        case 'square': return s.size * s.size;
        case 'rectangle': return s.height * s.width;
        case 'circle': return Math.PI * s.radius ** 2;
    }
}
```
