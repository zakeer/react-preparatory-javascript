## Importing Third-Party Modules
In addition to creating your own modules, you can also import and use modules created by others. These modules are typically referred to as **third-party** modules.

---

### Using Package Managers
To install and manage third-party modules in your project, you can use a package manager such as `npm` or `Yarn`. Here's an example of how to use `npm` to install a third-party module:
```bash
npm install chalk
```
In this example, we are installing the `chalk` module.

### Importing Third-Party Modules
To use a third-party module in your project, you first need to install it using a package manager. Once the module is installed, you can import it using the same syntax you use for importing your own modules.

Here's an example:
```javascript
import chalk from 'chalk';
console.log(chalk.bgRed("Hello Javascript")); 
```
In this example, we have imported the `chalk` module using the import keyword. We have then used the `.bgRed` method from the `chalk` module to print the `"Hello Javascript"` with red background.

### Real-time use case
Suppose you are working on a project that requires you to build a web application that displays a calendar. You might want to use a third-party module to handle the calendar functionality.

There are many third-party modules available for working with calendars, such as 
- FullCalendar
- Day.js
- Moment.js. 

By using a third-party module, you can save time and effort by not having to write the calendar functionality from scratch.
