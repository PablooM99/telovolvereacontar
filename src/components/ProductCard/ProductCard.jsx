import React, { useState } from 'react';
import { Box, Image, Text, Button, Stack, HStack, IconButton, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const totalInCart = cartItems.reduce((total, item) => {
    if (item.id === product.id) {
      return total + item.quantity;
    }
    return total;
  }, 0);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1); // Reset quantity after adding to cart
  };

  const maxAvailableQuantity = product.stock - totalInCart;

  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md" 
      p={4} 
      minW={{ base: '100%', md: '45%', lg: '30%' }}
      maxW="sm"
      m={2}
    >
      <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" mx="auto" />
      <Box mt={4}>
        <Stack spacing={2} align="center">
          <Text fontWeight="bold" fontSize="xl" textAlign="center">{product.name}</Text>
          <Text fontSize="md" color="gray.600" textAlign="center">{product.description}</Text>
          <Text fontSize="xl" color="teal.500" textAlign="center">${product.price}</Text>
          <Text fontSize="sm" color="gray.500">Stock disponible: {product.stock}</Text>
          {product.stock > 0 ? (
            <>
              <HStack maxW="150px" spacing={1} mt={2}>
                <IconButton
                  icon={<FaMinus />}
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                  aria-label="Decrement"
                  size="sm"
                />
                <NumberInput 
                  value={quantity} 
                  min={1} 
                  max={maxAvailableQuantity} 
                  onChange={(valueString) => setQuantity(parseInt(valueString))}
                  size="sm"
                  maxW="60px"
                >
                  <NumberInputField textAlign="center" />
                </NumberInput>
                <IconButton
                  icon={<FaPlus />}
                  onClick={() => setQuantity(Math.min(quantity + 1, maxAvailableQuantity))}
                  aria-label="Increment"
                  size="sm"
                />
              </HStack>
              <Button colorScheme="teal" onClick={handleAddToCart} isDisabled={quantity > maxAvailableQuantity} mt={2}>
                Añadir al carrito
              </Button>
            </>
          ) : (
            <Button colorScheme="teal" isDisabled mt={2}>
              Sin stock
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
