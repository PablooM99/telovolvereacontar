import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Box, Grid, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ProductCard from '../components/ProductCard/ProductCard';
import { useAuth } from '../context/AuthContext';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      let q;
      if (category) {
        q = query(collection(db, 'products'), where('categories', 'array-contains', category));
      } else {
        q = query(collection(db, 'products'));
      }
      const querySnapshot = await getDocs(q);
      const productsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsArray);
    };

    fetchProducts();
  }, [category]);

  const handleAddProduct = () => {
    navigate('/admin/add-product');
  };

  return (
    <Box p={4}>
      {isAdmin && (
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <IconButton
            icon={<AddIcon />}
            colorScheme="teal"
            onClick={handleAddProduct}
            aria-label="Agregar producto"
          />
        </Box>
      )}
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
