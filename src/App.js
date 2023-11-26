import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoPremium from './components/ProductoPremium';
import Navbar from './components/Navbar';
import { MenuProvider } from './components/MenuContext';
import MoreProducts from './components/MoreProducts';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <MenuProvider>
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <h1>Generación Z</h1>
          </header>
          <main>
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/"
                element={
                  <>
                    <ProductoPremium />
                    <MoreProducts />
                  </>
                }
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


// Querido programador:
// Cuando escribí este código, sólo Dios y yo
// sabíamos cómo funcionaba.
// Ahora, si sólo Dios lo sabe!
// Así que si está tratando de 'optimizar'
// esta rutina y fracasa (seguramente),
// por favor, incremente el siguiente contador
// como una advertencia para el siguiente colega:
// total_horas_perdidas_aquí = 189