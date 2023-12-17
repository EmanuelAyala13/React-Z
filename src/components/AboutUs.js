import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  background-size: 100% 100%;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const AnimatedH2 = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  animation: fadeIn 2s ease;
  transition: color 0.5s;
  &:hover {
    color: #ff0000; 
  }
`;

const Presentation = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
  font-size: 1.5em;
  line-height: 1.6;
  animation: slideIn 2s ease;
  color: rgba(255, 255, 255, 0.9); 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  background-color: rgba(0, 0, 0, 1);
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AnimatedH2>Acerca de Nosotros</AnimatedH2>
      <Presentation>
        <p>
          ¡Bienvenido a Generación Z! Somos una comunidad apasionada por la cultura pop,
          coleccionables y más. Nuestra misión es compartir la diversión y la emoción de ser parte
          de la Generación Z.
        </p>
        <p>
          Únete a nosotros en este viaje emocionante mientras exploramos nuevos productos, revisamos
          las últimas tendencias y conectamos con otros entusiastas de la Generación Z.
        </p>
      </Presentation>
    </AboutUsContainer>
  );
};

export default AboutUs;
