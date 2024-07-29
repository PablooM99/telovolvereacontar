import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock: 0,
    categories: [],
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, product);
  };

  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Nombre del Producto</FormLabel>
          <Input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="description" mt={4}>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="price" mt={4}>
          <FormLabel>Precio</FormLabel>
          <Input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="image" mt={4}>
          <FormLabel>URL de la Imagen</FormLabel>
          <Input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="stock" mt={4}>
          <FormLabel>Stock</FormLabel>
          <Input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Actualizar Producto</Button>
      </form>
    </Box>
  );
};

export default EditProduct;
