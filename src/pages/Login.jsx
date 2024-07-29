import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase/firebaseConfig';
import {
  Box, Button, FormControl, FormLabel, Input, Stack,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'Ha iniciado sesión correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Correo electrónico o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal">Iniciar Sesión</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
