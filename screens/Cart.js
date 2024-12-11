import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { useMyContext } from '../context/MyContext';
const CartScreen = () => {
  const { cart, clearCart, removeFromCart, addToCart, delToCart } = useMyContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function totalValue(arr) {
    let value = []
    arr.forEach(e => {
      value.push(e.price * e.quantity)
    });

    const sum = value.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    return sum.toFixed(2)
  }

  const renderCartItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 6, borderWidth: 1, borderStyle: 'solid' }}>
      <View style={{ flex: 1 }}>
        <Text>{item.name} - R${item.price.toFixed(2)}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            addToCart({ ...item, quantity: selectedQuantity });
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
            removeFromCart(item.id);
          }}
          style={{ padding: 10 }}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            delToCart({ ...item, quantity: selectedQuantity });
          }}
          style={{ padding: 10 }}
        >
          <Image
            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>Qtd: {item.quantity}</Text>
        <Text style={{ marginLeft: 10 }}>Total: R$ {(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, justifyContent: 'center', borderWidth: 1 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>

        <Text style={{ fontSize: 16, fontWeight: '900' }}>Carrinho de Compras</Text>
        <TouchableOpacity
          onPress={() => {
            clearCart();
          }}
        >
          <View style={{ flexDirection: 'row', gap: 4 }}><Text style={{ fontSize: 16 }}>Limpar Carrinho</Text>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9742/9742093.png' }}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableOpacity>
      </View >
      <FlatList
        style={{ width: '100%', padding: 8 }}
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCartItem}
      />
      <Text style={{ fontWeight: '900', fontSize: 32, textAlign: 'right', borderWidth: 1 }}>Total: R$ {totalValue(cart)}</Text>
    </View >
  );
};
export default CartScreen;