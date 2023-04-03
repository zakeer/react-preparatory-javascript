## Object Destructuring in JavaScript

Object destructuring is a way to extract properties from an object and assign them to variables with the same name. This can make your code more concise and easier to read.

---

### Syntax
```javascript
const { prop1, prop2, ... } = obj;
```

---

### Example
```javascript
const person = {
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

const { name, age, hobbies } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(hobbies); // Output: ['reading', 'traveling']
```

In this example, we have defined an object `person` with several properties. We have then extracted the `name`, `age`, and `hobbies` properties from the object using destructuring.

---

### Renaming Variables
You can also rename variables when using object destructuring. 

Here's an example:
```javascript
const person = {
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

const { name: fullName, age: yearsOld } = person;
console.log(fullName); // Output: John
console.log(yearsOld); // Output: 30
```
In this example, we have used object destructuring to extract the `name` and `age` properties from the person object and assigned them to variables with different names using the `:` syntax.

---

### Default Values
You can also set default values for variables in case the property doesn't exist in the object. 

Here's an example:
```javascript
const person = {
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

const { name, occupation = 'unemployed' } = person;
console.log(name); // Output: John
console.log(occupation); // Output: unemployed
```
In this example, we have used object destructuring to extract the `name` property from the person object and assigned it to a variable. We have also set a default value for the `occupation` variable in case the property doesn't exist in the object.

---

### Conclusion
Object destructuring is a powerful feature in JavaScript that allows you to extract properties from an object and assign them to variables with the same name. 

This can make your code more concise and easier to read, and it also allows you to set default values for variables in case the property doesn't exist in the object.

---

### Practise Code
```javascript
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }  
}

const user = new Person("Apsar", 25, "UI Engineer");

console.log(user);

// const name = user.name;
// const age = user.age;
// const job = user.job;

const { name, age, job, city } = user;

console.log(name);
console.log(age);
console.log(job);
console.log(city); // ?


const person = {
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

// const { hobbies, address } = person;
// const { street } = address;

const {  name, age, hobbies, address: { zip }, address } = person // Here error in duplicate name identifier
console.log(zip)
```

```javascript
const person = {
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


const { job: userJob = "Developer" } = person;
console.log(userJob);

console.log(person.job);
```

