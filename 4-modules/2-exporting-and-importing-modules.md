## Exporting and Importing Modules

---

### Exporting Modules
In JavaScript, you can export code from a module using the `export` keyword. 

There are several ways to do this:
- ### Named Exports

    With named exports, you can export one or more variables, functions, or objects from a module by specifying their names. 
    
    Here's an example:
    ```javascript
    // file1.js
    export const name = 'John';
    export function sayHello() {
        console.log('Hello!');
    }
    ```
    In this example, we have defined a constant `name` and a function `sayHello` in `file1.js`. We have then exported them using the `export` keyword.

- ### Default Exports

    With default exports, you can export **one value** per module. 
    
    Here's an example:
    ```javascript
    // file2.js
    export default function sayHello() {
        console.log('Hello!');
    }
    ```
    In this example, we have defined a function `sayHello` in `file2.js`. We have then exported it as the default export using the `export default` syntax.


### Importing Modules
In JavaScript, you can import code from a module using the import keyword. 

There are several ways to do this:
- ### Named Imports
    With named imports, you can import one or more variables, functions, or objects from a module by specifying their names. 

    Here's an example:
    ```javascript
    // file3.js
    import { name, sayHello } from './file1.js';

    console.log(name); // Output: John
    sayHello(); // Output: Hello!
    ```
    In this example, we have imported the `name` constant and the `sayHello` function from `file1.js` using the `import` keyword.

- ### Default Imports
    With default imports, you can import the default value from a module. 
    
    Here's an example:
    ```javascript
    // file4.js
    import sayHello from './file2.js';
    sayHello(); // Output: Hello!
    ```
    In this example, we have imported the default function from `file2.js` using the `import` keyword.

### Real-time use case
Suppose you are working on a project that requires you to build a web application that displays the weather for a given location. You might want to split your code into separate modules, such as:

- A `weather.js` module that handles retrieving the weather data.
- A `utils.js` module that contains utility functions.

By using named exports and imports, you can selectively import only the code you need from each module. By using default exports and imports, you can simplify the process of importing the most important piece of code from a module.
