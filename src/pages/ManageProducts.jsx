import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { Box, Button, Stack, Text, Input, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageProducts = () => {
  const { products, updateProduct, deleteProduct } = useProduct();
  const [editStock, setEditStock] = useState({});
  const navigate = useNavigate();

  const handleUpdateStock = (id) => {
    if (editStock[id] !== undefined) {
      updateProduct(id, { stock: parseInt(editStock[id]) });
      Swal.fire({
        title: 'Stock actualizado',
        text: 'El stock del producto ha sido actualizado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire('Borrado', 'El producto ha sido borrado', 'success');
      }
    });
  };

  const handleEditStockChange = (id, value) => {
    setEditStock((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Box>
      <Flex justify="space-between" mb={4}>
        <Button colorScheme="teal" onClick={() => navigate('/admin/add-product')}>
          + Agregar Producto
        </Button>
        <Button colorScheme="blue" onClick={() => navigate('/admin/edit-product')}>
          Editar Productos
        </Button>
      </Flex>
      <Stack spacing={4}>
        {products.map((product) => (
          <Box key={product.id} p={4} shadow="md" borderWidth="1px">
            <Text>{product.name}</Text>
            <Text>Stock: {product.stock}</Text>
            <Stack direction="row" spacing={4} align="center">
              <Input
                type="number"
                placeholder="Actualizar Stock"
                value={editStock[product.id] || ''}
                onChange={(e) => handleEditStockChange(product.id, e.target.value)}
              />
              <Button colorScheme="green" onClick={() => handleUpdateStock(product.id)}>
                Actualizar Stock
              </Button>
              <Button colorScheme="red" onClick={() => handleDeleteProduct(product.id)}>
                Borrar
              </Button>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ManageProducts;
