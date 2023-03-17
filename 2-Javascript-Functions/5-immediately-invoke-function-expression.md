## Immediately Invoked Function Expression (IIFE)

---

An Immediately Invoked Function Expression (IIFE) is a function that is executed right after it's defined. It's wrapped in parentheses and followed by another set of parentheses that invoke the function immediately.

---

The syntax for an IIFE is as follows:
```javascript
(function () {
    // code here
})();
```

---

### Here are some use cases where IIFE can be useful:
#### 1. Avoiding Global Namespace Pollution
One of the primary use cases of IIFE is to avoid polluting the global namespace. When you define a variable or a function in the global namespace, it becomes available to all the scripts on your page. This can lead to naming conflicts and unexpected behavior.

Using IIFE, you can create a private scope for your code and ensure that your variables and functions don't conflict with any other scripts on the page.
```javascript
(function() {
  // Private scope
  var foo = 'bar';
  function hello() {
    console.log('Hello world!');
  }

  // Code here won't pollute the global namespace
})();
```

---

#### 2. Creating Modules
In JavaScript, modules are a way to organize code into smaller, more manageable chunks. An IIFE can be used to create a module that contains private variables and functions that are not accessible outside of the module.
```javascript
var myModule = (function() {
  // Private variables
  var foo = 'bar';

  // Private function
  function hello() {
    console.log('Hello world!');
  }

  // Public API
  return {
    sayHello: hello
  };
})();

myModule.sayHello(); // Outputs 'Hello world!'
```
In the above example, we have created a module that contains a private variable foo and a private function `hello()`. We have also created a public API that exposes the `sayHello()` method to the outside world.

---

#### 3. Encapsulating Code
IIFE can be used to encapsulate code and prevent it from being modified or accessed by other scripts.
```javascript
(function() {
  var a = 1;
  var b = 2;
  
  // Private function
  function add() {
    return a + b;
  }

  // Public API
  window.myUtils = {
    add: add
  };
})();

console.log(myUtils.add()); // Outputs 3
```
In the above example, we have encapsulated the `add()` function and prevented it from being modified or accessed by other scripts. We have also created a public API that exposes the `add()`function to the outside world.

Overall, IIFE is a powerful tool in JavaScript that can be used to avoid namespace pollution, create modules, and encapsulate code.

---

