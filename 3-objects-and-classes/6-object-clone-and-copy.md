## Object Clone and Copy

In JavaScript, variables that are assigned to objects are assigned by **reference**, not by value. 

This means that if you assign an object to a variable, any changes made to the object will affect all variables that **reference** that object.

---

### Value as Reference
Consider the following example:
```javascript
const obj1 = { name: 'Syed' };
const obj2 = obj1;

obj2.name = 'Syed';

console.log(obj1.name); // Output: Syed
console.log(obj2.name); // Output: Syed
```

In this example, we have created two objects `obj1` and `obj2`. We have then assigned `obj1` to `obj2`. When we change the `name` property of `obj2`, it also changes the `name` property of `obj1` because `obj2` is just a **reference** to `obj1`.

---

### Object Clone and Copy
To create a copy of an object in JavaScript, you need to create a new object and copy over all the properties. There are several ways to do this, including:
- `Object.assign()`
- Spread Operator (`...`)
- `JSON.parse()` and `JSON.stringify()`

---

### `Object.assign()`
```javascript
const obj1 = { name: 'John' };
const obj2 = Object.assign({}, obj1);

obj2.name = 'Jane';

console.log(obj1.name); // Output: John
console.log(obj2.name); // Output: Jane
```
In this example, we have used the `Object.assign()` method to copy the properties of `obj1` to a new empty object, `obj2`. When we change the name property of `obj2`, it does not affect the name property of `obj1`.

---

### Spread Operator (`...`)
```javascript
const obj1 = { name: 'John' };
const obj2 = { ...obj1 };

obj2.name = 'Jane';

console.log(obj1.name); // Output: John
console.log(obj2.name); // Output: Jane
```
In this example, we have used the spread operator (`...`) to copy the properties of `obj1` to a new object, `obj2`. When we change the name property of `obj2`, it does not affect the name property of `obj1`.

--- 

### `JSON.parse()` and `JSON.stringify()`
```javascript
const obj1 = { name: 'John' };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = 'Jane';

console.log(obj1.name); // Output: John
console.log(obj2.name); // Output: Jane
```
In this example, we have used `JSON.parse()` and `JSON.stringify()` to convert `obj1` to a JSON string and then parse the JSON string into a new object, `obj2`. When we change the name property of `obj2`, it does not affect the name property of `obj1`.

---

### Conclusion
- In JavaScript, variables that are assigned to objects are assigned by reference, not by value. This means that if you assign an object to a variable, any changes made to the object will affect all variables that reference that object. 
- To create a copy of an object in JavaScript, you need to create a new object and copy over all the properties. - - You can use methods such as 
    - `Object.assign()`
    - the spread operator (`...`)
    - `JSON.parse()` and `JSON.stringify()`

