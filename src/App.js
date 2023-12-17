import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoPremium from './components/ProductoPremium';
import Navbar from './components/Navbar';
import { MenuProvider } from './components/MenuContext';
import MoreProducts from './components/MoreProducts';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutUs';
import Carrito from './components/Carrito';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <MenuProvider>
      <Router>
        <div className="App">
          <Navbar carrito={carrito} />
          <header className="App-header">
            <h1>Generación Z</h1>
          </header>
          <main>
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/productos"
                element={<MoreProducts isHome={false} carrito={carrito} setCarrito={setCarrito} />}
              />
              <Route
                path="/"
                element={
                  <>
                    <ProductoPremium />
                    <MoreProducts isHome={true} carrito={carrito} setCarrito={setCarrito} />
                  </>
                }
              />
              <Route
                path="/carrito"
                element={<Carrito carrito={carrito} setCarrito={setCarrito} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;
