// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

// Encuentra el elemento del DOM donde tu aplicación se montará
const container = document.getElementById('root');

// Crea una raíz con React 18
const root = createRoot(container);

// Renderiza tu aplicación dentro de la raíz
root.render(
  <ChakraProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </ChakraProvider>
);
