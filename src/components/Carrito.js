import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '../assets/CarritoCompras.png';

const CarritoContainer = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
`;

const CarritoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const EliminarButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const VaciarButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
`;

const Carrito = ({ carrito, setCarrito }) => {
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContainer>
      <h2>Carrito de Compras</h2>
      {Array.isArray(carrito) && carrito.length > 0 ? (
        <>
          <ul>
            {carrito.map((producto) => (
              <CarritoItem key={producto.id}>
                {producto.nombre} - ${producto.precio}
                <EliminarButton onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </EliminarButton>
              </CarritoItem>
            ))}
          </ul>
          <VaciarButton onClick={vaciarCarrito}>Vaciar Carrito</VaciarButton>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <img src={ShoppingCartIcon} alt="Carrito de Compras" style={{ width: '30px', marginTop: '10px' }} />
    </CarritoContainer>
  );
};

export default Carrito;
