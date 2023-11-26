import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuContext from './MenuContext';

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

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #61dafb;
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

  return (
    <>
      <Nav>
        <MenuButton onClick={toggleMenu}>Menú</MenuButton>
        <NavbarLinks>
          <Link to="/">Inicio</Link>
          <Link to="/about-us">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </NavbarLinks>
      </Nav>

      <MenuContainer open={menuOpen} onClick={toggleMenu}>
        <MenuContent>
          <Link to="/">Inicio</Link>
          <Link to="/about-us">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export default Navbar;
