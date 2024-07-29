import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../services/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  Box, Button, FormControl, FormLabel, Input, Stack, Select, CheckboxGroup, Checkbox, Textarea,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleSubCategoryChange = (selectedSubCategories) => {
    setSubCategories(selectedSubCategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (!name || !price || !stock || !description || !mainCategory) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos obligatorios',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      setUploading(false);
      return;
    }

    try {
      let finalImageUrl = imageUrl;

      if (imageFile) {
        const imageRef = ref(storage, `products/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        finalImageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'products'), {
        name,
        price,
        stock,
        image: finalImageUrl,
        description,
        categories: [mainCategory, ...subCategories],
        createdAt: new Date().toISOString()
      });

      Swal.fire({
        title: 'Producto agregado',
        text: 'El producto ha sido agregado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/products');
      });

      setName('');
      setPrice('');
      setStock('');
      setImageFile(null);
      setImageUrl('');
      setDescription('');
      setMainCategory('');
      setSubCategories([]);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Hubo un problema al agregar el producto: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleImageFileChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl('');
    }
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageFile(null);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Nombre del Producto</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Precio</FormLabel>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Stock</FormLabel>
            <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Imagen (Archivo)</FormLabel>
            <Input type="file" onChange={handleImageFileChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Imagen (URL)</FormLabel>
            <Input value={imageUrl} onChange={handleImageUrlChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Descripción</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Categoría Principal</FormLabel>
            <Select value={mainCategory} onChange={(e) => setMainCategory(e.target.value)}>
              <option value="" disabled>Seleccione una categoría</option>
              <option value="libros">Libros</option>
              <option value="escolar">Escolar</option>
              <option value="juegos">Juegos</option>
              <option value="paperbags">Paperbags</option>
              <option value="bebes">Bebés</option>
              <option value="disfraces">Disfraces</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Subcategorías</FormLabel>
            <CheckboxGroup onChange={handleSubCategoryChange} value={subCategories}>
              <Stack>
                <Checkbox value="bebes">Bebés</Checkbox>
                <Checkbox value="infantil">Infantil</Checkbox>
                <Checkbox value="juvenil">Juvenil</Checkbox>
                <Checkbox value="adultos">Adultos</Checkbox>
                <Checkbox value="carpetas">Carpetas</Checkbox>
                <Checkbox value="mochilas">Mochilas</Checkbox>
                <Checkbox value="cartucheras">Cartucheras</Checkbox>
                <Checkbox value="utiles">Útiles</Checkbox>
                <Checkbox value="sonido">Sonido</Checkbox>
                <Checkbox value="de-mesa">De Mesa</Checkbox>
                <Checkbox value="didacticos">Didácticos</Checkbox>
                <Checkbox value="madera">Madera</Checkbox>
                <Checkbox value="pintar">Pintar</Checkbox>
                <Checkbox value="rompecabezas">Rompecabezas</Checkbox>
                <Checkbox value="artistica">Artística</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <Button type="submit" colorScheme="teal" isLoading={uploading}>Agregar Producto</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddProduct;
