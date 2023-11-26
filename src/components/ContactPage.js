import React, { useState } from 'react';
import styled from 'styled-components';
import FondoContacto from '../assets/FondoContacto.png';

const ContactFormContainer = styled.div`
  background-image: url(${FondoContacto});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: white;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  resize: none;
  min-height: 80px;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PasswordInput = styled.input`
  flex: 1;
  padding: 8px;
`;

const SubmitButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const ContactPage = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactFormContainer>
      <h2>Contacto</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nombre">Nombre:</Label>
        <Input type="text" id="nombre" name="nombre" required />

        <Label htmlFor="apellido">Apellido:</Label>
        <Input type="text" id="apellido" name="apellido" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="asunto">Asunto:</Label>
        <Textarea id="asunto" name="asunto" required />

        <Label htmlFor="contrasena">Contraseña:</Label>
        <PasswordContainer>
          <PasswordInput
            type="password"
            id="contrasena"
            name="contrasena"
            onChange={handlePasswordChange}
            required
          />
        </PasswordContainer>

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactPage;
