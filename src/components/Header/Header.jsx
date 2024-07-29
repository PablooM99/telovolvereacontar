import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, HStack, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box as={Link} to="/" fontSize="xl" fontWeight="bold" color="white">
            Te lo volveré a contar
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="white">
                Productos
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/products/libros">Libros</MenuItem>
                <MenuItem as={Link} to="/products/escolar">Escolar</MenuItem>
                <MenuItem as={Link} to="/products/juegos">Juegos</MenuItem>
                <MenuItem as={Link} to="/products/paperbags">Paperbags</MenuItem>
                <MenuItem as={Link} to="/products/bebes">Bebés</MenuItem>
                <MenuItem as={Link} to="/products/disfraces">Disfraces</MenuItem>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
                    Libros
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/products/bebes">Bebés</MenuItem>
                    <MenuItem as={Link} to="/products/infantil">Infantil</MenuItem>
                    <MenuItem as={Link} to="/products/juvenil">Juvenil</MenuItem>
                    <MenuItem as={Link} to="/products/adultos">Adultos</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
                    Escolar
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/products/carpetas">Carpetas</MenuItem>
                    <MenuItem as={Link} to="/products/mochilas">Mochilas</MenuItem>
                    <MenuItem as={Link} to="/products/cartucheras">Cartucheras</MenuItem>
                    <MenuItem as={Link} to="/products/utiles">Útiles</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
                    Juegos
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/products/sonido">Sonido</MenuItem>
                    <MenuItem as={Link} to="/products/de-mesa">De Mesa</MenuItem>
                    <MenuItem as={Link} to="/products/didacticos">Didácticos</MenuItem>
                    <MenuItem as={Link} to="/products/madera">Madera</MenuItem>
                    <MenuItem as={Link} to="/products/pintar">Pintar</MenuItem>
                    <MenuItem as={Link} to="/products/rompecabezas">Rompecabezas</MenuItem>
                    <MenuItem as={Link} to="/products/artistica">Artística</MenuItem>
                  </MenuList>
                </Menu>
              </MenuList>
            </Menu>
            <Link to="/contact">Contacto</Link>
            <Link to="/about">Quiénes Somos</Link>
            <Link to="/how-to-buy">Cómo Comprar</Link>
            <Link to="/faq">Preguntas Frecuentes</Link>
          </HStack>
        </HStack>
        <HStack spacing={8} alignItems="center">
          <Link to="/cart">Carrito</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
