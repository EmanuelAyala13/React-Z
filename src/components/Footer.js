import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5; /* Ajusta el interlineado según tus preferencias */
`;

const Button = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 0 10px;
`;

const RightsReserved = styled.p`
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Description>
        <p>
          Bienvenido a Generación Z, tu tienda de coleccionables Funko Pop. Explora nuestra amplia selección de figuras de tus personajes favoritos y encuentra las últimas novedades para agregar a tu colección.
        </p>
        <p>
          En Generación Z, nos apasiona ofrecerte productos de alta calidad y un servicio excepcional. ¡Descubre el mundo de los Funko Pop con nosotros!
        </p>
      </Description>
      <div>
        <Button>Contáctanos</Button>
      </div>
      <RightsReserved>&copy; 2023 Generación Z. Todos los derechos reservados.</RightsReserved>
    </FooterContainer>
  );
};

export default Footer;
