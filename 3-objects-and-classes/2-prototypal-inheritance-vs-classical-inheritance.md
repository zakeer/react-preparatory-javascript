## Prototypal Inheritance vs. Classical Inheritance

<img src="https://2558458775-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LSemf7mp1liQa7nfIAC%2F-LU16Tx-lr3TosIV8kV5%2F-LU1AncP4LCLpfAQmFxh%2FScreen%20Shot%202018-12-18%20at%2010.07.14%20PM.png?alt=media&token=b8481ac5-67b5-4bf1-8e32-e25887dc6741">

In object-oriented programming, inheritance is the concept of creating new classes from existing classes. 

In JavaScript, there are two types of inheritance: 
- prototypal inheritance 
- classical inheritance.

---

### Prototypal Inheritance
In prototypal inheritance, objects inherit **properties** and **methods** directly from other objects. 

<img src="https://cdn-media-1.freecodecamp.org/images/m2PjrvRpNTiz8WFb9LxjwWTeHw9SvgOKBSGS">

Each object has a `prototype`, which is a reference to another object. When an object is created, it inherits all the **properties** and **methods** from its `prototype`.

```javascript
var parent = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

var child = Object.create(parent);
child.name = 'Jane';
child.greet(); // Output: Hello, Jane
```

In this example, `child` is created using `Object.create()`and inherits all the **properties** and **methods** from `parent`. We can then modify the `name` property of child, and when we call the `greet()` method, it uses the `name` property of `child`.

---

### Classical Inheritance
In classical inheritance, objects are created from **classes**, which are blueprints for objects. 

<img src="https://storage.googleapis.com/algodailyrandomassets/curriculum/frontend/js-fundamentals/class-vs-prototypical/Class%20and%20Objects.JPG">

Classes define **properties** and **methods**, and objects inherit these **properties** and **methods** from their class.

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log('Hello, my name is ' + this.name);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

var dog = new Dog('Fido', 3, 'Golden Retriever');
dog.speak(); // Output: Hello, my name is Fido
dog.bark(); // Output: Woof!
```

In this example, we have defined an `Animal` class with a constructor method and a `speak()` method. We have also defined a `Dog` class that extends the `Animal` class and adds a `bark()` method. 

We have created a new instance of the Dog class with the `new` keyword and called its methods.

---

### Which is Better?
Both prototypal inheritance and classical inheritance have their advantages and disadvantages. Prototypal inheritance is simpler and more flexible, while classical inheritance is more structured and easier to read and maintain.

In JavaScript, prototypal inheritance is more commonly used, as it is the natural way of creating objects. However, classical inheritance is still useful in certain situations, such as when you need to create complex hierarchies of objects with a clear structure.

---

### Practise

```javascript
// class Parent {}

// class child extends Parent {}


class Employee {
  
  name;
  address;
  phoneNumber;
  experience;
  
  constructor(name, address, phoneNumber, experience) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.experience = experience
  }
};


class Programmer extends Employee {
  constructor(name, address, phoneNumber, experience, programmingLanguages) {
    super(name, address, phoneNumber, experience);
    this.languages = programmingLanguages;
  }
}

const employeeOne = new Employee("Syed", "Guntur", "9876543210", "3years");
console.log(employeeOne);

const employeeTwo = new Employee("Apsar", "Hyderabad", "8978675645", "5years");
console.log(employeeTwo);


const programmerOne = new Programmer(
  "Muskan", 
  "Hyderabad", 
  "6789786789", 
  "2years", 
  ["Javascript", "HTML", "CSS"]
);

console.log(programmerOne);
```


