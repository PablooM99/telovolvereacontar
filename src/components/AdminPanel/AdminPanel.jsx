import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Swal from 'sweetalert2';

const AdminPanel = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productStock, setProductStock] = useState('');

  const handleAddProduct = async () => {
    try {
      await addDoc(collection(db, 'products'), {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage,
        stock: productStock
      });
      Swal.fire({
        title: 'Producto agregado!',
        text: 'El producto ha sido agregado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setProductName('');
      setProductPrice('');
      setProductDescription('');
      setProductImage('');
      setProductStock('');
    } catch (error) {
      console.error('Error adding product:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al agregar el producto. Por favor, intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Panel de Administración</Heading>
      <FormControl id="productName" mb={4}>
        <FormLabel>Nombre del Producto</FormLabel>
        <Input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </FormControl>
      <FormControl id="productPrice" mb={4}>
        <FormLabel>Precio</FormLabel>
        <Input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </FormControl>
      <FormControl id="productDescription" mb={4}>
        <FormLabel>Descripción</FormLabel>
        <Textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </FormControl>
      <FormControl id="productImage" mb={4}>
        <FormLabel>Imagen (URL)</FormLabel>
        <Input
          type="text"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </FormControl>
      <FormControl id="productStock" mb={4}>
        <FormLabel>Stock</FormLabel>
        <Input
          type="text"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleAddProduct}>
        Agregar Producto
      </Button>
    </Box>
  );
};

export default AdminPanel;
