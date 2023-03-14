## Function Declaration vs Function Expression

---

In JavaScript, there are two ways to define functions: function declaration and function expression.

---

### Function Declaration
A function declaration is a statement that declares a named function. The syntax for a function declaration is as follows:

Here is an example of a higher-order function that takes a callback function:
```javascript
function functionName(parameter1, parameter2, ...) {
  // function body
}
```
Here's an example:

```javascript
function sum(a, b) {
  return a + b;
}
```

Function declarations are hoisted, which means they are moved to the top of their scope. This allows you to use the function before it's declared. For example:

```javascript
console.log(sum(2, 3)); // Output: 5

function sum(a, b) {
  return a + b;
}
```

---


### Function Expression

A function expression is an expression that defines a function.
The syntax for a function expression is as follows:
```javascript
const functionName = function(parameter1, parameter2, ...) {
  // function body
};
```
Here's an example:
```javascript
const sum = function(a, b) {
  return a + b;
};
```

Function expressions are not hoisted, which means you must define the function before you use it. 

For example:
```javascript
console.log(sum(2, 3)); // Output: Uncaught ReferenceError: sum is not defined

const sum = function(a, b) {
  return a + b;
};

```

---

### Real-time Use Cases
Function declarations and function expressions have different use cases. Function declarations are useful when you want to create a named function that you can use multiple times throughout your code.

For example:
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('John'); // Output: Hello, John!
greet('Jane'); // Output: Hello, Jane!

```

Function expressions are useful when you want to create a function that is only used in one place. 
For example:
```javascript
const calculate = function(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return NaN;
  }
};

console.log(calculate(2, 3, '+')); // Output: 5
console.log(calculate(2, 3, '-')); // Output: -1
console.log(calculate(2, 3, '*')); // Output: 6
console.log(calculate(2, 3, '/')); // Output: 0.6666666666666666
console.log(calculate(2, 3, '%')); // Output: NaN
```

Higher-order functions are functions that take one or more functions as arguments or return a function as a result. Here are some examples of higher-order functions:
```javascript
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const calculate = function(a, b, operator) {
  return operator(a, b);
};

console.log(calculate(2, 3, add)); // Output: 5
console.log(calculate(2, 3, subtract)); // Output: -1
console.log(calculate(2, 3, multiply)); // Output: 6

```