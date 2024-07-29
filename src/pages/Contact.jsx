import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Container } from '@chakra-ui/react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje
    console.log({ email, name, message });
  };

  return (
    <Container maxW="md" p={4}>
      <Heading mb={4}>Contacto</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="name" isRequired mt={4}>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="message" isRequired mt={4}>
          <FormLabel>Mensaje</FormLabel>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Enviar</Button>
      </form>
    </Container>
  );
};

export default Contact;
