import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Textarea, Stack } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (email !== repeatEmail) {
      Swal.fire({
        title: 'Error!',
        text: 'Los correos electrónicos no coinciden.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const order = {
      customer: { name, email, phone, address, message },
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending',
      createdAt: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);

      // Actualizar el stock de los productos
      const updateStockPromises = cartItems.map(item => {
        const productRef = doc(db, 'products', item.id);
        return updateDoc(productRef, {
          stock: item.stock - item.quantity
        });
      });

      await Promise.all(updateStockPromises);

      setCartItems([]); // Clear cart after successful order
      Swal.fire({
        title: 'Orden creada!',
        text: `Tu orden ha sido creada con éxito. ID de orden: ${docRef.id}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      navigate('/');
    } catch (error) {
      console.error('Error creando la orden:', error);
      Swal.fire({
        title: 'Error!',
        text: `Hubo un error al crear tu orden. Por favor, intenta de nuevo. ${error.message}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Checkout</Heading>
      <Stack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="repeatEmail" isRequired>
          <FormLabel>Repetir Email</FormLabel>
          <Input type="email" value={repeatEmail} onChange={(e) => setRepeatEmail(e.target.value)} />
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel>Teléfono</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Dirección</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Mensaje</FormLabel>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleCheckout}>Finalizar Compra</Button>
      </Stack>
    </Box>
  );
};

export default Checkout;
