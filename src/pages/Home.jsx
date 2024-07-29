import React from 'react';
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={4}>
      <Heading textAlign="center" mb={4}>Bienvenidos a Te Lo Volveré a Contar</Heading>
      <Text textAlign="center" mb={4}>Encuentra los mejores productos para tu hogar.</Text>
      <Stack direction="row" spacing={4} justify="center" mb={4}>
        <Image boxSize="200px" src="image1.jpg" alt="Image 1" />
        <Image boxSize="200px" src="image2.jpg" alt="Image 2" />
        <Image boxSize="200px" src="image3.jpg" alt="Image 3" />
      </Stack>
      <Heading size="md" textAlign="center" mb={4}>Categorías Destacadas</Heading>
      <Stack direction="row" spacing={4} justify="center">
        <Box>
          <Image boxSize="150px" src="category1.jpg" alt="Category 1" />
          <Text textAlign="center">Categoría 1</Text>
        </Box>
        <Box>
          <Image boxSize="150px" src="category2.jpg" alt="Category 2" />
          <Text textAlign="center">Categoría 2</Text>
        </Box>
        <Box>
          <Image boxSize="150px" src="category3.jpg" alt="Category 3" />
          <Text textAlign="center">Categoría 3</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
