import React, { useState } from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '../assets/CarritoCompras.png';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 0;
`;

const TitleContainer = styled.h1`
  text-align: center;
  color: red;
`;

const Introduction = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #61dafb;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const IntroductionText = styled.p`
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
`;

const ProductCardContainer = styled.div`
  border: 2px solid #61dafb;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
  background: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #333;
  margin: 10px 0;
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

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ShowMoreButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const MoreProducts = ({ isHome, carrito, agregarAlCarrito }) => {
  const allProducts = [
    { name: 'Dodoria Funko Pop', image: ShoppingCartIcon, price: 19.99 },
  ];

  const [visibleProducts, setVisibleProducts] = useState(isHome ? 3 : allProducts.length);

  const handleShowMore = () => {
    setVisibleProducts(allProducts.length);
  };

  const handleShowLess = () => {
    setVisibleProducts(isHome ? 3 : allProducts.length);
  };

  return (
    <div>
      {isHome && (
        <Introduction>
          <IntroductionText>
            ¡Bienvenido a Generación Z! Explora nuestra selección de productos destacados y encuentra los artículos más buscados por los entusiastas de la Generación Z.
          </IntroductionText>
        </Introduction>
      )}
      <TitleContainer>Productos Destacados</TitleContainer>
      <Container>
        {allProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCardContainer key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <Title>{product.name}</Title>
            <Price>Precio: ${product.price}</Price>
            <AddButton onClick={() => agregarAlCarrito(product)}>Agregar al carrito</AddButton>
          </ProductCardContainer>
        ))}
      </Container>
      <ButtonContainer>
        {visibleProducts === 3 ? (
          <ShowMoreButton onClick={handleShowMore}>Mostrar más</ShowMoreButton>
        ) : (
          <ShowMoreButton onClick={handleShowLess}>Mostrar menos</ShowMoreButton>
        )}
      </ButtonContainer>
    </div>
  );
};

export default MoreProducts;
