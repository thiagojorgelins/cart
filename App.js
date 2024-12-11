import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProvider } from './context/MyContext';
import HomeScreen from './screens/Home';
import CartScreen from './screens/Cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: "Tela Inicial" }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ headerTitle: "Carrinho de compras" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
};
