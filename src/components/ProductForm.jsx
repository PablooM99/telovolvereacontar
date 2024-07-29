import React, { useState } from 'react';
import { db } from '../services/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import {
  Box, Button, FormControl, FormLabel, Input, Stack, CheckboxGroup, Checkbox,
} from '@chakra-ui/react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (selectedCategories) => {
    setCategories(selectedCategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'products'), {
        name,
        price,
        stock,
        image,
        categories,
      });
      setName('');
      setPrice('');
      setStock('');
      setImage('');
      setCategories([]);
    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Nombre del Producto</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Stock</FormLabel>
            <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Imagen (URL)</FormLabel>
            <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Categorías</FormLabel>
            <CheckboxGroup onChange={handleCategoryChange} value={categories}>
              <Stack>
                <Checkbox value="libros">Libros</Checkbox>
                <Checkbox value="bebes">Bebés</Checkbox>
                <Checkbox value="infantil">Infantil</Checkbox>
                <Checkbox value="juvenil">Juvenil</Checkbox>
                <Checkbox value="adultos">Adultos</Checkbox>
                <Checkbox value="escolar">Escolar</Checkbox>
                <Checkbox value="carpetas">Carpetas</Checkbox>
                <Checkbox value="mochilas">Mochilas</Checkbox>
                <Checkbox value="cartucheras">Cartucheras</Checkbox>
                <Checkbox value="utiles">Útiles</Checkbox>
                <Checkbox value="juegos">Juegos</Checkbox>
                <Checkbox value="sonido">Sonido</Checkbox>
                <Checkbox value="de-mesa">De Mesa</Checkbox>
                <Checkbox value="didacticos">Didácticos</Checkbox>
                <Checkbox value="madera">Madera</Checkbox>
                <Checkbox value="pintar">Pintar</Checkbox>
                <Checkbox value="rompecabezas">Rompecabezas</Checkbox>
                <Checkbox value="artistica">Artística</Checkbox>
                <Checkbox value="paperbags">Paperbags</Checkbox>
                <Checkbox value="disfraces">Disfraces</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <Button type="submit" colorScheme="teal">Agregar Producto</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ProductForm;
