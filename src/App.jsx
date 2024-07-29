import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import HowToBuy from './pages/HowToBuy';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/add-product" element={<ProductForm />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
