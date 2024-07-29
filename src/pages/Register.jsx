import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../services/firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import {
  Box, Button, FormControl, FormLabel, Input, Stack, Text,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar detalles del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      Swal.fire({
        title: 'Registro exitoso',
        text: 'Su cuenta ha sido creada con éxito',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire({
          title: 'Error',
          text: 'El correo electrónico ya está registrado',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <Box>
      <form onSubmit={handleRegister}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="teal">Registrarse</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
