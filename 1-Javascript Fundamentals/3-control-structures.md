## Control Structures
Control Structures are used to control the flow of execution in a program. They allow you to execute different parts of your code based on certain conditions or criteria.

There are three main types of control structures in JS:
1. **Conditional Statements** (`if/else` or `switch`)
2. **loops** (`for`, `while`, or `do while`)
3. **functions**


### Conditional Statements
Conditional Statements allows you to execute different parts of your code based on whether certain conditions are `true` or `false`.

Most common conditional statements 
- if
- switch


#### `If/else` statement
```javascript
let number = 15;

if(number > 10) {
  console.log("You have high value")
} else {
  console.log("You have low value")
}
```

### `switch` statement
The `switch` statement allows you to execute different blocks of code depending on the value of a variable.

`Switch` Syntax 
```javascript
switch(condition/expression) {
  case value1:
    // ...
    break;
  case value2:
    // ...
    break;
  default:
    // default code
  
}
```


### Example of `switch` Statement
```javascript
let day = 'Monday';

switch(day) {
  case 'Monday':
    console.log(`Will have normal lunch`);
    break;
  
  case 'Tuesday':
    console.log(`Will have Egg biryani`);
    break;

  case 'Friday':
    console.log(`Will have Biryani`);
    break;
  
  default:
    console.log(`We are fasting...`)
}
```