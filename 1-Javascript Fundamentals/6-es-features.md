# ES Features (Modern Language Features)

### `const` and `let`
The `const` and `let` keywords allow to define variables with `block scope`. 

Use `const` to define **constants**. Variables declared as constants will be **read-only** and cannot be changed through reassignment. However, if a constant is an object or array its properties or items can be updated or removed.

```javascript
// declare constant (object)
const user = {
  name: 'John Doe',
  age: 42
}
// update property
user.age = 43

// reassign throws TypeError: Assignment to constant variable
user = { name: 'Jane Doe', age: 24 }

// declare constant (array)
const users = []

// add item
users.push({ name: 'John Doe', age: 42 })

// reassign throws TypeError: Assignment to constant variable
users = [{ name: 'Jane Doe', age: 24 }]
```

Use let to define variables which can be changed.
```javascript
// declare variable (object)
let user = {
  name: 'John Doe',
  age: 42
}

// update property
user.age = 43

// reassign allowed
user = {
  name: 'Jane Doe',
  age: 24
}

// declare variable (array)
let users = []

// add item
users.push({
  name: 'John Doe',
  age: 42
})

// reassign allowed
users = [{
  name: 'Jane Doe',
  age: 24
}]
```

### Object Shorthands
#### Shorthand property names
If you want to define an object who's keys have the same name as the variables passed-in as properties, you can use the shorthand and simply pass the key name.
```javascript
const cat = '🐈'
const dog = '🐕'
const rabbit = '🐇'
const horse = '🐴'

const animals = {
  cat,
  dog,
  rabbit,
  horse
}
// animals = { cat: '🐈', dog: '🐕', rabbit: '🐇', horse: '🐴' }
```

> Without the shorthand, you would have to define each key explicitly.
```javascript
const cat = '🐈'
const dog = '🐕'
const rabbit = '🐇'
const horse = '🐴'

const animals = {
  cat: cat,
  dog: dog,
  rabbit: rabbit,
  horse: horse
}
// animals = { cat: '🐈', dog: '🐕', rabbit: '🐇', horse: '🐴' }
```

#### Shorthand method names
```javascript
const user = {
  name: 'John Doe',
  sayHello() {
    return 'Hello there!'
  },
}
```

> Without the shorthand, you would have to define method explicitly by using the function keyword.
```javascript
const user = {
  name: 'John Doe',
  sayHello: function() {
    return 'Hello there!'
  }
}
```

### Arrow Functions
**Arrow functions** provide a shorter syntax compared to regular *function expressions*.

- REGULAR FUNCTION EXPRESSION
```javascript
const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(function (number) {
  return number * number
})

const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number
}, 0)
```
- ARROW FUNCTION WITH BODY AND RETURN
```javascript
const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(number => {
  return number * number
})

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number
}, 0)
```

- ARROW FUNCTION WITH IMPLICIT RETURN
```javascript
const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(number => number * number)

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0)
```

- ARROW FUNCTION IMPLICITLY RETURNING AN OBJECT
```javascript
const getUser = () => ({ name: 'John Doe', age: 42 })
const user = getUser()
```

### Default Parameters
In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where **default parameters** can help.
```javascript
const add = (a, b = 0) => a + b // b defaults to 0
add(2) // 2 (2 + 0)
add(2, 3) // 5 (2 + 3)

const multiply = (a, b = 1) => a * b // b defaults to 1
multiply(2) // 2 (2 * 1)
multiply(2, 3) // 6 (2 * 3)
```
> Without the default parameter one would need to check for undefined and assigning a default value before using b.
```javascript
const add = (a, b) => {
  b = (typeof b === 'undefined') ? 0 : b  // b defaults to 0 if undefined
  return a * b
}

const multiply = (a, b) => {
  b = (typeof b === 'undefined') ?  1 : b // b defaults to 1 if undefined
  return a * b
}
```

### Rest Parameters
A function definition's last parameter can be prefixed with "...", which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only the last parameter in a function definition can be a **rest parameter**!
```javascript
function race(first, second, third, ...last) {
  console.log({
    first,
    second,
    third,
    last
  })
}
race('Mario', 'Luigi', 'Donkey Kong', 'Bowser', 'Koopa Troopa', 'Wario')
/*
{
  first: 'Mario',
  second: 'Luigi'
  third: 'Donkey Kong',
  last: [
    'Bowser',
    'Koopa Troopa',
    'Wario'
  ]
}
*/

const calcSquareNumbers = (...numbers) => numbers.map(n => n * n)
const squareNumbers = calcSquareNumbers(1, 2, 3, 4, 5)
// [1, 4, 9, 16, 25]
```

### Spread Syntax
The **Spread syntax** (or "..." syntax) can be used when all elements from an object or array need to be included in a list of some kind.

- For array literals or strings:
```javascript
const some = [2, 3]
const more = [5, 6, 7]

// combine arrays by inserting all elements into a new array
const numbers = [
  1,
  ...some,
  4,
  ...more
]
// [1, 2, 3, 4, 5, 6, 7]
```
- For object literals:
```javascript
const pikachu = {
  name: 'Pikachu'
}

const stats = {
  health: 40,
  attack: 60,
  defense: 45
}

// pass all key:value pairs from other object(s) and create a new object
const pokemon = {
  ...pikachu,
  ...stats,
  level: 1,
}
// {name: 'Pikachu', health: 40, attack: 60, defense: 45, level: 1}
```

### Destructuring Assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

#### Array destructuring
- BASIC VARIABLE ASSIGNMENT
```javascript
const [a, b] = [1, 2]
// a = 1, b = 2
```

- VARIABLE ASSIGNMENT WITH DEFAULT VALUES
```javascript
const [a, b = 3] = [1]
// a = 1, b = 3
```

- PARSING AN ARRAY RETURNED FROM A FUNCTION CALL
```javascript
const getNumbers() => [1, 2, 3]
const [a, b, c] = getNumbers()
// a = 1, b = 2, c = 3
```

- ASSIGNING THE REST OF AN ARRAY TO A VARIABLE
```javascript
const [one, two, ...rest] = [1, 2, 3, 4, 5]
// one = 1, two = 2, rest = [3, 4, 5]
```

#### Array destructuring
- BASIC VARIABLE ASSIGNMENT
```javascript
const user = {
  id: 42,
  name: 'John Doe',
  role: 'developer'
}

const { id, role } = user
// id = 42, role = 'developer'
```
- ASSIGNING TO NEW VARIABLE NAMES
```javascript
const { id: newId, role: newRole } = user
// newId = 42, newRole = 'developer'
```

- ASSIGNING TO DEFAULT VALUES
```javascript
const { a = 10, b = 5 } = { a: 3 }
// a = 3, b = 5
```

- ASSIGNING TO NEW VARIABLES NAMES AND PROVIDING DEFAULT VALUES
```javascript
const { a: newA = 10, b: newB = 5 } = { a: 3 }
// newA = 3, newB = 5
```

- UNPACKING FIELDS FROM OBJECTS PASSED AS A FUNCTION PARAMETER
```javascript
const getUserId = ({ id }) => id
const userId = getUserId(user)
// userId = 42
```

- NESTED DESTRUCTURING
```javascript
const company = {
  name: 'SAP',
  address: {
    street: 'Whitefield',
    city: 'Bangalore',
    postalCode: '560068'
  }
}
const { address: { street, postalCode } } = company
// street = 'Whitefield', postalCode = '560068'
```

