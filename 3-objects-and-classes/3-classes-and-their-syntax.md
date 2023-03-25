## Classes in JavaScript

Classes in JavaScript are a way to **create reusable objects** with properties and methods. 

Classes are introduced in ECMAScript 6 (ES6), and they provide a simpler and more concise way to define object

---

### Syntax
The syntax for defining a class in JavaScript is as follows:
```javascript
class ClassName {
  constructor() {
    // Constructor code
  }

  method1() {
    // Method code
  }

  method2() {
    // Method code
  }
}
```

---

Here's an example of a class definition in JavaScript:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}
```
In this example, we have defined a `Person` class with a `constructor` method and a `greet()` method. The `constructor` method is used to initialize the properties of the object, while the `greet()` method is used to print a greeting message.

---

### Creating Objects
To create an **object** from a **class** in JavaScript, you use the `new` keyword and call the constructor method. 

Here's an example:
```javascript
var person = new Person('John', 30);
person.greet(); // Output: Hello, my name is John
```
In this example, we have created a new instance of the `Person` class with the `new` keyword and passed in the `name` and `age` parameters to the constructor method.

---

### Inheritance
JavaScript classes also support inheritance, which allows you to create new classes from existing classes. To create a subclass, you use the `extends` keyword and call the `super` keyword in the constructor method. 

Here's an example:
```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log('Studying...');
  }
}

var student = new Student('Jane', 20, 'A');
student.greet(); // Output: Hello, my name is Jane
student.study(); // Output: Studying...
```
In this example, we have created a `Student` class that `extends` the `Person` class. We have called the `super` keyword in the constructor method to initialize the properties of the `Person` class, and we have added a new property `grade` to the `Student` class. We have also added a `study()` method to the `Student` class.