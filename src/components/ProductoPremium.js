import React from 'react';
import styled from 'styled-components';
import Zamasu from '../assets/Zamasu_Funko.png';

const PremiumCardContainer = styled.div`
  border: 2px solid #61dafb;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 200px;
  margin: 0 auto;
  background: #fff; 
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  color: #333;
`;

const Price = styled.p`
  color: #666;
`;

const AddButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const ProductoPremium = () => {
  return (
    <PremiumCardContainer>
      <ProductImage src={Zamasu} alt="Producto Premium" />
      <Title>Zamasu Funko</Title>
      <Price>Precio: $19.99</Price>
      <AddButton>Agregar al carrito</AddButton>
    </PremiumCardContainer>
  );
};

export default ProductoPremium;
