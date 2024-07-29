import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import HowToBuy from './pages/HowToBuy';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import ManageProducts from './pages/ManageProducts';
import EditProduct from './pages/EditProduct';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider} from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import PrivateRoute from './context/PrivateRoute';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <AuthProvider>
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
              <Route path="/register" element={<Register />} />
              <Route path="/admin/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
              <Route path="/admin/manage-products" element={<PrivateRoute><ManageProducts /></PrivateRoute>} />
              <Route path="/admin/edit-product/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
            </Routes>
          </AuthProvider>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
