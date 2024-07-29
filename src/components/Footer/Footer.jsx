import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.100" py={4} mt={4}>
      <Stack direction="row" spacing={6} justify="center" mb={4}>
        <Link href="#">Facebook</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">WhatsApp</Link>
      </Stack>
      <Text align="center">
        Copyright Todos los derechos reservados Indumentarias MP | Creado por 
        <Link href="https://your-portfolio-link.com" isExternal> Pablo Montenegro</Link>
      </Text>
    </Box>
  );
};

export default Footer;
