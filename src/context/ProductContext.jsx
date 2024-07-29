import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../services/firebase/firebaseConfig';
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc } from 'firebase/firestore';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    });

    return unsubscribe;
  }, []);

  const addProduct = async (product) => {
    await addDoc(collection(db, 'products'), product);
  };

  const updateProduct = async (id, updatedProduct) => {
    const productDoc = doc(db, 'products', id);
    await updateDoc(productDoc, updatedProduct);
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
