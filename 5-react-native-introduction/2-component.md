## Understanding Components in React Native

---

we'll explore the basics of **Components** in React Native, and how they are used to create <mark>reusable UI elements</mark> for mobile apps.

---

### What is a Component?
In React Native, a Component is a reusable piece of code that represents a UI element. 

Components can be composed of other Components or Views, and can have their own styles and behavior. 

Components can be used to create complex UI elements that can be reused throughout your app.

---

### Creating a Component:
Let's create a simple Component in React Native. In your code editor, create a new file called MyButton.js. In this file, import the necessary React Native components:


```javascript
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
```

Then, create a simple functional based `Button` component by using the `<TouchableOpacity>` and `<Text>` components:

```javascript
const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={{ backgroundColor: 'blue', padding: 10 }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};
```

creating `class` based component
```javascript
class MyButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, onPress } = this.props;
        return (
            <TouchableOpacity 
                onPress={onPress} 
                style={{ backgroundColor: 'blue', padding: 10 }}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}
```

In this code, we're creating a simple `Button` component with a blue background color and white text. We're also passing in two **props**: 
- `title`
- `onPress`

This is just a basic example, but Components can be customized in a wide range of ways.

---

### Using a Component:
Now that we've created a Component, let's use it in our app. In another file, import the `MyButton` component and use it like this:
```javascript
import React from 'react';
import { View } from 'react-native';
import MyButton from './MyButton';

export default function App(){
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View>
      <MyButton title="Press me" onPress={handlePress} />
    </View>
  );
};
```
In this code, we're importing the `MyButton` component and using it in a `App` component. We're passing in the `title` and `onPress` props to customize the `Button`. 

This is just one example of how Components can be used to create reusable UI elements.

---

### Conclusion:
We've explored the basics of Components in React Native. 
- We've learned that Components are reusable pieces of code that represent UI elements, and can be composed of other Components or Views. 
- We've also seen how Components can be used to create complex UI elements that can be reused throughout your app. 
- With practice and experimentation, you can use Components to create reusable and flexible UI elements for your mobile apps.