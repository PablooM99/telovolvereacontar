import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, Button, Stack, Text } from '@chakra-ui/react';

const Cart = () => {
  const { cartItems, removeItem } = useCart();

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <Box>
      <Stack spacing={4}>
        {cartItems.map((item) => (
          <Box key={item.id} p={4} shadow="md" borderWidth="1px">
            <Text>{item.name}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Button colorScheme="red" onClick={() => handleRemoveItem(item.id)}>Eliminar</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Cart;
