import React, { useState } from 'react';
import { View, Text, Button, Picker, Image, TouchableOpacity } from 'react-native';
import { useMyContext } from '../context/MyContext';
const products = [
  { id: 1, name: 'Produto 1', price: 10 },
  { id: 2, name: 'Produto 2', price: 15 },
  { id: 3, name: 'Produto 3', price: 20 },
];
const HomeScreen = ({ navigation }) => {
  const { addToCart, delToCart, cart } = useMyContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Visualizar Carrinho"
        onPress={() => {
          navigation.navigate('Cart')
        }}
      />
      {products.map((product) => (
        <View key={product.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text>{product.name} - ${product.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                addToCart({ ...product, quantity: selectedQuantity });
              }}
              style={{ padding: 10 }}
            >
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4315/4315609.png' }}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                delToCart({ ...product, quantity: selectedQuantity });
              }}
              style={{ padding: 10 }}
            >
              <Image
                source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Quantidade: {getProductQuantity(product.id)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default HomeScreen;