import React, { useState } from 'react';
import styled from 'styled-components';
import Dodoria from '../assets/Dodoria_Funko.png';
import FailedFusions from '../assets/Failed_Fusions_Funko.png';
import GokuSsjBlue from '../assets/GokuSsjBlueFunkoPop.png';
import PerfectCell from '../assets/Perfect_Cell_Funko.png';
import Piccolo from '../assets/Piccolo_Funko.png';
import Porunga from '../assets/Porunga_Funko.png';
import Shenlong from '../assets/ShenlongFunkoPop.png';
import Trunks from '../assets/TrunksFunkoPop.png';
import VegetaRed from '../assets/VegetaRedFunkoPop.png';
import Videl from '../assets/Videl_Funko.png';

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

const MoreProducts = () => {
  const allProducts = [
    { name: 'Dodoria Funko', image: Dodoria, price: 19.99 },
    { name: 'Failed Fusions Funko', image: FailedFusions, price: 24.99 },
    { name: 'Goku SSJ Blue Funko Pop', image: GokuSsjBlue, price: 29.99 },
    { name: 'Perfect Cell Funko', image: PerfectCell, price: 22.99 },
    { name: 'Piccolo Funko', image: Piccolo, price: 18.99 },
    { name: 'Porunga Funko', image: Porunga, price: 27.99 },
    { name: 'Shenlong Funko Pop', image: Shenlong, price: 32.99 },
    { name: 'Trunks Funko Pop', image: Trunks, price: 26.99 },
    { name: 'Vegeta Red Funko Pop', image: VegetaRed, price: 28.99 },
    { name: 'Videl Funko', image: Videl, price: 20.99 },
  ];

  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleShowMore = () => {
    setVisibleProducts(allProducts.length);
  };

  const handleShowLess = () => {
    setVisibleProducts(3);
  };

  return (
    <div>
      <TitleContainer>Productos Destacados</TitleContainer>
      <Container>
        {allProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCardContainer key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <Title>{product.name}</Title>
            <Price>Precio: ${product.price}</Price>
            <AddButton>Agregar al carrito</AddButton>
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
