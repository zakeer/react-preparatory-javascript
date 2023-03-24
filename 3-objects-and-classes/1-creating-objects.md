## JavaScript Objects

In JavaScript, objects are used to store keyed collections of various data and more complex entities. Objects can contain properties and methods, and can be nested within other objects. In ES6, JavaScript introduced classes, which are a simpler and more concise way of defining objects.

---

### Creating Objects

There are several ways to create objects in JavaScript:

1. Object Literal
```javascript
var person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};
```

2. Object Constructor
```javascript
var person = new Object();
person.name = 'John';
person.age = 30;
person.hobbies = ['reading', 'traveling'];
person.address = {
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345'
};
```

3. `Object.create()`
```javascript
var personProto = {
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

var person = Object.create(personProto);
person.name = 'John';
person.age = 30;
person.hobbies = ['reading', 'traveling'];
person.address = {
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345'
};

```

---

### Accessing Object Properties
you can access object properties using dot notation or bracket notation:
```javascript
var person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
console.log(person.address.city); // Output: Anytown
```

---

### Modifying Object Properties
You can modify object properties using dot notation or bracket notation:
```javascript
var person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

person.name = 'Jane';
person['age'] = 35;
person.address.city = 'Othertown';

console.log(person); // Output: { name: 'Jane', age: 35, hobbies: ['reading', 'traveling'], address: { street: '123 Main St', city: 'Othertown', state: 'CA', zip: '12345' } }
```

---

### Constructor Functions
A constructor function is a function that creates objects using the new keyword. 

Here's an example:
```javascript
function Person(firstName, lastName, age, hobbies) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.hobbies = hobbies;
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person('John', 'Doe', 30, ['reading', 'traveling']);
const person2 = new Person('Jane', 'Doe', 25, ['hiking', 'painting']);

console.log(person1.firstName); // Output: John
console.log(person2.hobbies[0]); // Output: hiking
console.log(person1.getFullName()); // Output: John Doe
```
In this example, we have defined a constructor function `Person` that creates objects with the `firstName`, `lastName`, `age`, `hobbies`, and `getFullName` properties. 

We have created two instances of the Person object using the `new` keyword.

---

### Classes
Classes are a simpler and more concise way of defining objects in JavaScript. 

Here's an example:
```javascript
class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet() {
    console.log('Hello, ' + this.name);
  }
}

var person = new Person('John', 30, ['reading', 'traveling']);
person.greet(); // Output: Hello, John
```
In this example, we have defined a `Person` class with a `constructor` method and a `greet()` method. We have also created a new instance of the `Person` class with the `new` keyword.