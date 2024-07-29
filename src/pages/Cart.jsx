import React from 'react';
import {
  Box, Heading, Text, Button, Stack, Image, useToast,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useCart();
  const toast = useToast();

  const handleRemoveItem = (id) => {
    removeItem(id);
    toast({
      title: "Producto eliminado.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Carrito vaciado.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Carrito de Compras</Heading>
      {cartItems.length === 0 ? (
        <Text>No hay productos en el carrito.</Text>
      ) : (
        <Stack spacing={4}>
          {cartItems.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={item.image} alt={item.name} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Heading size="md">{item.name}</Heading>
                </Box>
                <Text>Precio: ${item.price}</Text>
                <Text>Cantidad: {item.quantity}</Text>
                <Button colorScheme="red" onClick={() => handleRemoveItem(item.id)}>Eliminar</Button>
              </Box>
            </Box>
          ))}
          <Button colorScheme="teal" onClick={handleClearCart}>Vaciar Carrito</Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
