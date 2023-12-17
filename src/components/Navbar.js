import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuContext from './MenuContext';
import ShoppingCartIcon from '../assets/CarritoCompras.png';
import Carrito from './Carrito';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3b5998;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #61dafb;
    }
  }

  img {
    width: 30px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

const MenuContent = styled.div`
  text-align: center;
  color: white;
  a {
    display: block;
    padding: 15px;
    font-size: 20px;
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #3b5998;
    }
  }
`;

const Navbar = () => {
  const { menuOpen, toggleMenu } = useContext(MenuContext);
  const [carritoOpen, setCarritoOpen] = useState(false);

  const toggleCarrito = () => {
    setCarritoOpen(!carritoOpen);
  };

  return (
    <>
      <Nav>
        <MenuButton onClick={toggleMenu}>Menú</MenuButton>
      </Nav>

      <MenuContainer open={menuOpen} onClick={toggleMenu}>
        <MenuContent>
          <Link to="/">Inicio</Link>
          <Link to="/about-us">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/productos">Productos</Link>
        </MenuContent>
      </MenuContainer>

      <NavbarLinks>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/about-us">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/productos">Productos</Link>
        </div>
        <div onClick={toggleCarrito}>
          <img src={ShoppingCartIcon} alt="Carrito de Compras" />
          {carritoOpen && <Carrito />}
        </div>
      </NavbarLinks>
    </>
  );
};

export default Navbar;
