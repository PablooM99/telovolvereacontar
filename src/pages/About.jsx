import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Text fontSize="2xl" mb={4}>Quiénes Somos</Text>
      <Text>
        Hola! Somos un emprendimiento familiar unidas por el amor a la literatura y al disfrute de estar en contacto con la infancia a través del juego.
        Es por eso que decidimos tener este espacio donde pueden encontrar libros para todas las edades, juegos, juguetes novedosos y muchas cosas lindas
        para ir al cole con toda la buena onda.
      </Text>
    </Container>
  );
};

export default About;
