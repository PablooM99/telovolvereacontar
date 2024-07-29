import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Box, Grid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard/ProductCard';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

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

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
