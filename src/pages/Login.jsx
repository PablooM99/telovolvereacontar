import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Container } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase/firebaseConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire('Login Successful', 'You are now logged in', 'success');
      navigate('/admin');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <Container maxW="md" p={4}>
      <Heading mb={4}>Iniciar Sesión</Heading>
      <form onSubmit={handleLogin}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Iniciar Sesión</Button>
      </form>
    </Container>
  );
};

export default Login;
