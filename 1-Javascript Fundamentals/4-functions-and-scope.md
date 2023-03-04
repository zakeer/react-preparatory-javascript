## Functions and scope
A function is block of code that perform a specific task. Functions allow us to write resuable code that can be called multiple times with different arguments(inputs)

- Function declaration
- Function expression

### Function Declartion
A function declartion is a statement that defines new function with a given name and parameters(`variables` or `placeholder`)

```javascript
function greet(username) {
  console.log(`Hello, ${username}!`);
}
```

### Function Expression
A function expression is a way to define a function as a **value** of a variable
```javascript
const greet = function(username) {
  console.log(`Hello, ${username}!`);
}
```

## Scope
Scope refers to the visibility of variables in different parts of your code. In JS there are two types of scope:
1. global scope: Global scope refers to variables that are defined/create outside of any function.
```javascript
let name = "Syed Zakeer"
function greet() {
  console.log(name); // here `name` is global scope variable
}
```

2. local scope: Local scope referes to variables that are defined/create within a function. Any variables that are define/create within the function are only accessible within that function, and are not visible outside of it.
```javascript
function greet() {
  let name = "Syed Zakeer"
  console.log(name); // here `name` is local scope variable
}

console.log(name); // ERROR: ReferenceError: name is not defined
```