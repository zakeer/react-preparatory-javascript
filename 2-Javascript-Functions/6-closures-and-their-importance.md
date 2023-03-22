## Closures
In JavaScript, a closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned. In other words, the function "remembers" the environment in which it was created.

---

### Creating Closures
A closure is created when a function is defined inside another function, and the inner function refers to variables in the outer function. 

Here's an example:
```javascript
function outer() {
  var name = 'Syed';

  function inner() {
    console.log('Hello ' + name + '!');
  }

  return inner;
}

var greet = outer();
greet(); // Output: Hello Syed!
```
In this example, `outer()` defines a variable `name` and a function `inner()`. The `inner()` function refers to the `name` variable in the outer scope. When we call `outer()`, it returns the `inner()` function. We assign the returned function to the `greet` variable, and then we call `greet()`. The `inner()` function still has access to the `name` variable, even though `outer()` has already returned.

---

### Importance of Closures
Closures are important in JavaScript because they allow us to:

- Create private variables and functions that are not accessible from outside the function.
- Create factory functions that generate functions with specific behavior.
- Create functions that remember their state and can be used to maintain state between function calls.

---

### Example 1: Private Variables and Functions
```javascript
function counter() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

var counter1 = counter();
counter1(); // Output: 1
counter1(); // Output: 2
counter1(); // Output: 3

var counter2 = counter();
counter2(); // Output: 1
counter2(); // Output: 2
```
In this example, `counter()` returns a function `increment()` that has access to a private variable `count`. When we call `counter()`, it returns a new instance of the `increment()` function with its own private `count` variable. This allows us to create multiple counters that don't interfere with each other.

---

### Example 2: Factory Functions
```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

var double = createMultiplier(2);
console.log(double(5)); // Output: 10

var triple = createMultiplier(3);
console.log(triple(5)); // Output: 15
```
In this example, `createMultiplier()` is a factory function that returns a new function that multiplies its input by a specified `multiplier`. We can use this function to create new functions that multiply by different values. This allows us to create functions with specific behavior without having to write a new function for each behavior.

---

### Example 3: Maintaining State
```javascript
function add() {
  var sum = 0;

  return function(number) {
    sum += number;
    console.log(sum);
  };
}

var adder = add();
adder(5); // Output: 5
adder(10); // Output: 15
adder(15); // Output: 30
```
In this example, `add()` returns a function that maintains a running total of the numbers that have been passed to it. The sum variable is not accessible from outside the function, but the returned function has access to it.

