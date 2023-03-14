## Class 2: JavaScript Functions

---

### Introduction
In JavaScript, a `function` is a block of code that performs a specific task. Functions are reusable code blocks that can be called multiple times from different parts of the program. Functions are a key feature of JavaScript that allows for code organization, abstraction, and modularity.

---

### Function Definition
A function is defined using the `function` keyword, followed by the function name, a set of parentheses, and a set of curly braces:
```javascript
function functionName() {
  // function code here
}
```

Here's an example of a function that adds two numbers together:
```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}
```
This function takes two parameters, `num1` and `num2`, and returns their sum using the `return` keyword.

---

### Function Invocation
To call a function, you simply use its name, followed by a set of parentheses that contain any arguments:
```javascript
addNumbers(2, 3); // returns 5
```
This code calls the `addNumbers()` function with arguments `2` and `3`, which returns `5`.

---

### Function Parameters and Arguments
- Function parameters are the variables listed in the function definition.
- Function arguments are the values passed to the function when it is called. 

Here's an example:
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // prints "Hello, John!"
greet("Jane"); // prints "Hello, Jane!"
```
In this example, the `greet()` function takes one parameter, `name`, which is used to print a personalized greeting. The function is called twice with different arguments, which results in different output.

---

### Return Statement
Functions can return a value using the `return` statement. The value returned by the function can then be assigned to a variable or used in an expression. 

Here's an example:
```javascript
function square(num) {
  return num * num;
}

var result = square(5);
console.log(result); // prints 25
```

In this example, the `square()` function takes one parameter, `num`, and returns its square. The returned value is assigned to the `result` variable, which is then printed to the console.

---

### Scope
In JavaScript, variables defined inside a function are only accessible within that function. This is known as the function's scope. 

Here's an example:
```javascript
function scopeExample() {
  var x = 1;
  console.log(x); // prints 1
}

scopeExample();
console.log(x); // throws an error: x is not defined
```
In this example, the `x `variable is defined inside the `scopeExample()` function and is only accessible within that function. When the function is called, `x` is printed to the console. However, when we try to print `x` outside of the function, we get an error because `x` is not defined in the global scope.