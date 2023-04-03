## Creating a Customizable Card Component

---

### Introduction:
Creating a customizable Card Component with React Native. 
we'll combine the concepts of 
- View
- Component
- Props
- Style
- Layout
- Flexbox
- Container
to create a reusable and customizable `Card` Component that can be used in a wide range of mobile apps.

---

### Use Case:
Let's say you're building a mobile app that displays a list of products, and each product is displayed using a `Card` Component. 

The `Card` Component should be able to display
- image
- title
- description
- button

and should be customizable with Props.

---

### Creating the Card Component:
In your code editor, create a new file called C`ard.js`. In this file, import the necessary React Native components:
```javascript
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
```

Then, create a `Card` Component that accepts Props:
```javascript
const Card = ({ image, title, description, buttonLabel, onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
    container: {
        backgroundColor: 'white', 
        borderRadius: 10, 
        overflow: 'hidden'
    },
    image: {
        height: 200
    },
    info: {
        padding: 10
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 18
    },
    description: {
        marginTop: 10
    },
    button: {
        backgroundColor: 'blue', 
        padding: 10
    },
    buttonText: {
        color: 'white', 
        textAlign: 'center'
    }
}
```

In this code, we're creating a `Card` Component that accepts Props for the `image`, `title`, `description`, buttonLabel, and `onPress` function. 

We're using Flexbox to position the UI elements within the Card Component, and we're using Containers to group and style the UI elements. 

The Card Component is customizable with Props, and can be used to display a wide range of products.

---

### Using the Card Component:
Now that we've created the `Card` Component, let's use it in our app. In another file, import the `Card` component and use it like this:
```javascript
import React from 'react';
import { View } from 'react-native';
import Card from './Card';

const App = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View>
      <Card
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80"
        title="Product Title"
        description="Product Description"
        buttonLabel="Buy Now"
        onPress={handlePress}
      />
    </View>
  );
};
```
In this code, we're importing the `Card` component and passing Props to customize the `image`, `title`, `description`, `buttonLabel`, and button `onPress` function. 

The Card Component can be used to display a wide range of products, and can be customized with different images, titles, descriptions, and buttons.

--- 

### Conclusion:
- We've combined the concepts of 
    - View
    - Component
    - Props
    - Style
    - Layout
    - Flexbox
    - Container 

    to create a customizable Card Component with React Native. 
- We've seen how these concepts can be used together to create reusable and flexible UI components that can be used in a wide range of mobile apps. 
- With practice and experimentation, you can use these concepts to create powerful and visually appealing UI elements for your mobile apps.