import React from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Preguntas Frecuentes</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ¿Cómo puedo realizar un pedido?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Puedes realizar un pedido seleccionando los productos que deseas comprar y agregándolos a tu carrito. Luego, sigue los pasos para completar tu compra.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ¿Cuáles son los métodos de pago disponibles?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Aceptamos tarjetas de crédito, débito y transferencias bancarias.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ¿Realizan envíos a todo el país?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Sí, realizamos envíos a todo el país.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
