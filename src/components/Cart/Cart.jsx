import React from 'react';
import { Box, Button, Text, Stack, IconButton, Heading, HStack, NumberInput, NumberInputField } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <Box p={4}>
      <Heading mb={4}>Carrito de Compras</Heading>
      {cartItems.length === 0 ? (
        <Text>
          El carrito está vacío. <RouterLink to="/products">Ver productos</RouterLink>
        </Text>
      ) : (
        cartItems.map(item => (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
            <Stack direction="row" justify="space-between" align="center">
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Stack direction="row" align="center">
                <HStack maxW="150px" spacing={1}>
                  <IconButton
                    icon={<FaMinus />}
                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    aria-label="Decrement"
                    size="sm"
                  />
                  <NumberInput 
                    value={item.quantity} 
                    min={1} 
                    max={item.stock} 
                    onChange={(valueString) => updateQuantity(item.id, parseInt(valueString))}
                    size="sm"
                    maxW="60px"
                  >
                    <NumberInputField textAlign="center" />
                  </NumberInput>
                  <IconButton
                    icon={<FaPlus />}
                    onClick={() => updateQuantity(item.id, Math.min(item.quantity + 1, item.stock))}
                    aria-label="Increment"
                    size="sm"
                  />
                </HStack>
                <IconButton icon={<FaTrash />} onClick={() => removeFromCart(item.id)} aria-label="Remove" size="sm" />
              </Stack>
            </Stack>
          </Box>
        ))
      )}
      {cartItems.length > 0 && (
        <Button colorScheme="teal" mt={4} as={RouterLink} to="/checkout">
          Proceder al Checkout
        </Button>
      )}
    </Box>
  );
};

export default Cart;
