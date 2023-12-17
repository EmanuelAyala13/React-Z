import React from 'react';
import styled from 'styled-components';
import Zamasu from '../assets/Zamasu_Funko.png';

const PremiumCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border: 2px solid #61dafb;
  max-width: 600px;
  margin: 10px auto;
  background: #fff;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const Title = styled.h2`
  color: #333;
`;

const Price = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #333;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const ProductoPremium = () => {
  return (
    <PremiumCardContainer>
      <ImageContainer>
        <ProductImage src={Zamasu} alt="Producto Premium" />
      </ImageContainer>
      <ContentContainer>
        <Title>Zamasu Funko</Title>
        <Price>Precio: $19.99</Price>
        <ProductDescription>
          Zamasu Funko es un personaje popular de la serie Dragon Ball. Este Funko Pop captura todos los detalles de Zamasu, desde su diseño único hasta su expresión característica. ¡Añade este coleccionable a tu lista hoy mismo!
        </ProductDescription>
        <AddButton>Agregar al carrito</AddButton>
      </ContentContainer>
    </PremiumCardContainer>
  );
};

export default ProductoPremium;
