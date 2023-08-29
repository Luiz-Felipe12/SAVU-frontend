import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './recuperarSenha.css';

const RecuperarSenhaScreen = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEnviar = () => {
    // Lógica para enviar o e-mail de recuperação de senha
    console.log('E-mail para recuperação de senha:', email);
  };

  return (
    <div style={{ background: '#EDEDEE', height: 'calc(100vh)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
        <h1 style={{ color: '#393C47', fontSize: '70px', marginLeft: '2rem',marginTop: '5rem' }}>SAVU</h1>
        <img src="/imgs/logo.png" alt="Logo" style={{ width: '100px', marginTop: '1rem', marginLeft: '1rem' }} />
      </div>
      <h2 style={{ marginTop: '-2rem', color: '#393C47', marginBottom: '1rem' }}>Sistema de Agendamento de Visitas à UFAPE</h2>
      <div className="background-container">
        <div className="content-container">
          <div className="form-container">
            <h1 className="form-title">Recuperar Senha</h1>
            <p className="form-description">
              Digite seu e-mail abaixo para receber um link de recuperação de senha.
            </p>
            <div className="input-wrapper">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="input-field"
                placeholder="Digite seu e-mail"
              />
            </div>
            <button onClick={handleEnviar} className="button button-enviar">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenhaScreen;
