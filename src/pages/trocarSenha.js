import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css';

const TrocarSenhaScreen = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [showSenhaAtual, setShowSenhaAtual] = useState(false);
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarNovaSenha, setShowConfirmarNovaSenha] = useState(false);

  const handleSenhaAtualChange = (e) => {
    setSenhaAtual(e.target.value);
  };

  const handleNovaSenhaChange = (e) => {
    setNovaSenha(e.target.value);
  };

  const handleConfirmarNovaSenhaChange = (e) => {
    setConfirmarNovaSenha(e.target.value);
  };

  const handleShowSenhaAtual = () => {
    setShowSenhaAtual(!showSenhaAtual);
  };

  const handleShowNovaSenha = () => {
    setShowNovaSenha(!showNovaSenha);
  };

  const handleShowConfirmarNovaSenha = () => {
    setShowConfirmarNovaSenha(!showConfirmarNovaSenha);
  };

  const handleTrocarSenha = () => {
    // Lógica para trocar a senha
    console.log('Senha Atual:', senhaAtual);
    console.log('Nova Senha:', novaSenha);
    console.log('Confirmar Nova Senha:', confirmarNovaSenha);
  };

  const eyeIconStyle = {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    marginRight: '0.5rem'
  };

  return (
    <div style={{ background: '#EDEDEE', height: 'calc(100vh)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', marginTop:'-3rem' }}>
        <h1 style={{ color: '#393C47', fontSize: '70px', marginRight: '0.5rem' }}>SAVU</h1>
        <img src="/imgs/logo.png" alt="Logo" style={{ width: '100px', marginTop: '-1rem', marginLeft: '1rem' }} />
      </div>
      <h2 style={{ marginTop: '-2rem', color: '#393C47', marginBottom: '1rem' }}>Sistema de Agendamento de Visitas à UFAPE</h2>
      <div style={{ background: 'white', padding: '1rem', marginTop: '1rem', width: '400px', height: '420px', textAlign: 'center', borderRadius: '10%' }}>
        <h1 style={{ color: '#393C47', fontSize: '40px' }}>Trocar Senha</h1>
        <div style={{ fontSize: '20px', textAlign: 'left' }}>Senha Atual:</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
          <input
            type={showSenhaAtual ? 'text' : 'password'}
            value={senhaAtual}
            onChange={handleSenhaAtualChange}
            className="input-field"
            style={{ flex: '1', marginRight: '0.5rem', paddingRight: '3rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '16px' }}
          />
          {showSenhaAtual ? (
            <FaEye onClick={handleShowSenhaAtual} style={eyeIconStyle} />
          ) : (
            <FaEyeSlash onClick={handleShowSenhaAtual} style={eyeIconStyle} />
          )}
        </div>
        <div style={{ fontSize: '20px', textAlign: 'left' }}>Nova Senha:</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
          <input
            type={showNovaSenha ? 'text' : 'password'}
            value={novaSenha}
            onChange={handleNovaSenhaChange}
            className="input-field"
            style={{ flex: '1', marginRight: '0.5rem', paddingRight: '3rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '16px' }}
          />
          {showNovaSenha ? (
            <FaEye onClick={handleShowNovaSenha} style={eyeIconStyle} />
          ) : (
            <FaEyeSlash onClick={handleShowNovaSenha} style={eyeIconStyle} />
          )}
        </div>
        <div style={{ fontSize: '20px', textAlign: 'left' }}>Confirmar Nova Senha:</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
          <input
            type={showConfirmarNovaSenha ? 'text' : 'password'}
            value={confirmarNovaSenha}
            onChange={handleConfirmarNovaSenhaChange}
            className="input-field"
            style={{ flex: '1', marginRight: '0.5rem', paddingRight: '3rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '16px' }}
          />
          {showConfirmarNovaSenha ? (
            <FaEye onClick={handleShowConfirmarNovaSenha} style={eyeIconStyle} />
          ) : (
            <FaEyeSlash onClick={handleShowConfirmarNovaSenha} style={eyeIconStyle} />
          )}
        </div>
        <div className="login-buttons" style={{ paddingTop: '20px', paddingBottom: '20px', alignItems: 'center' }}>
          <button onClick={handleTrocarSenha} className="button button-enviar" style={{ padding: '0.5rem 1rem', borderRadius: '20px', marginTop:'0.5rem' }}>
            Trocar Senha
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrocarSenhaScreen;
