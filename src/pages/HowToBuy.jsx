import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const HowToBuy = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Text fontSize="2xl" mb={4}>Cómo Comprar</Text>
      <Text>
        1. Elegí el producto que querés comprar<br />
        2. Hacé clic en el botón "Agregar al carrito"<br />
        3. Podés seguir agregando otros productos al carrito o hacer clic en "Iniciar compra"<br />
        4. Completá tus datos de contacto y hacé clic en "Continuar"<br />
        5. Ingresá la dirección adonde querés recibir el producto. Luego hacé clic en "Continuar"<br />
        6. Seleccioná el medio de envío que querés y hacé clic en "Continuar"<br />
        7. Elegí el medio de pago<br />
        8. Una vez que hayas elegido el medio de pago, hacé clic en "Continuar"<br />
        9. En la página de confirmación de compra, podés revisar toda la información de tu compra y confirmar<br />
        10. Después de confirmar, recibirás un e-mail de nuestra parte<br />
        11. Una vez recibido el pago, enviaremos el comprobante y tu pedido
      </Text>
    </Container>
  );
};

export default HowToBuy;
