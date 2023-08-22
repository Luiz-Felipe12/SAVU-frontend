import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import './login.css';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Professor');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSenhaValid, setIsSenhaValid] = useState(true);
  const [isNomeValid, setIsNomeValid] = useState(true);
  const [isCpfValid, setIsCpfValid] = useState(true);
  const [isWhatsappValid, setIsWhatsappValid] = useState(true);

  const eyeIconStyle = {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    marginRight: '0.5rem'
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNomeChange = (e) => {
    const value = e.target.value;
    setNome(value);
    setIsNomeValid(value.length >= 4);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleCpfChange = (e) => {
    const value = e.target.value;
    setCpf(value);
    setIsCpfValid(validateCpf(value));
  };

  const handleWhatsappChange = (e) => {
    const inputValue = e.target.value;
    setWhatsapp(inputValue);
    setIsWhatsappValid(validateWhatsapp(inputValue));
  };

  const handleSenhaChange = (e) => {
    const value = e.target.value;
    setSenha(value);
    setIsSenhaValid(value.length >= 6);
  };

  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const handleTipoUsuarioChange = (e) => {
    setTipoUsuario(e.target.value);
  };

  const handleCadastro = () => {
    // Lógica para cadastro do usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('CPF:', cpf);
    console.log('WhatsApp:', whatsapp);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);
    console.log('Tipo de Usuário:', tipoUsuario);
  };

  const validateWhatsapp = (input) => {
    const phonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/; // (99) 99999-9999

    return phonePattern.test(input);
  };
  const validateEmail = (email) => {
    // Lógica de validação de email (pode ser uma expressão regular)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateCpf = (cpf) => {
    // Lógica de validação de CPF (pode ser uma expressão regular ou outro método)
    return /^(\d{3}\.){2}\d{3}-\d{2}$/.test(cpf);
  };

  return (
    <div style={{ background: '#EDEDEE', height: '130vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '-5rem', marginTop:'-15rem'}}>
        <h1 style={{ color: '#393C47', fontSize: '70px', marginLeft: '2rem',marginTop: '4rem', }}>SAVU</h1>
        <img src="/imgs/logo.png" alt="Logo" style={{ width: '100px', marginTop: '1rem', marginLeft: '1rem' }} />
      </div>
      <h2 style={{ marginTop: '4rem', color: '#393C47', paddingBottom:'10px', paddingTop:'15px' }}>Sistema de Agendamento de Visitas à UFAPE</h2>
      <div style={{ background: 'white', padding: '2rem', marginTop: '0.3rem', width: '800px', display: 'flex', justifyContent: 'space-between', borderRadius: '8%', boxshadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        {/* Primeira coluna */}
        <div style={{ flex: 1, marginRight: '1rem', textAlign: 'center' }}>
          <h1 style={{ color: '#393C47', textAlign:'left'}}>Cadastro</h1>
          <div className="label">Nome:</div>
          <div className="input-wrapper">
            <input
              type="text"
              value={nome}
              onChange={handleNomeChange}
              className="input-field"
              style={{ border: isNomeValid ? 'none' : '2px solid red' }}
            />
          </div>
          {!isNomeValid && (
            <div style={{ color: 'red', fontSize: '14px', textAlign: 'left', marginBottom: '0.5rem' }}>
              Nome deve ter no mínimo 4 caracteres.
            </div>
          )}
          <div className="label">Email:</div>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
              style={{ border: isEmailValid ? 'none' : '2px solid red' }}
            />
          </div>
          {!isEmailValid && (
            <div style={{ color: 'red', fontSize: '14px', textAlign: 'left', marginBottom: '0.5rem' }}>
              Email inválido.
            </div>
          )}
          <div className="label">CPF:</div>
          <div className="input-wrapper">
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={handleCpfChange}
              className="input-field"
              style={{
                border: isCpfValid ? 'none' : '2px solid red',
              }}
            />
          </div>
          {!isCpfValid && (
            <div style={{ color: 'red', fontSize: '14px', textAlign: 'left', marginBottom: '0.5rem' }}>
              CPF inválido.
            </div>
          )}

          <div className="label">WhatsApp:</div>
          <div className="input-wrapper">
            <InputMask
              mask="(99) 99999-9999"
              value={whatsapp}
              onChange={handleWhatsappChange}
              className="input-field"
              style={{
                border: isWhatsappValid ? 'none' : '2px solid red',
              }}
            />
          </div>
          {!isWhatsappValid && (
            <div style={{ color: 'red', fontSize: '14px', textAlign: 'left', marginBottom: '0.5rem' }}>
              WhatsApp inválido.
            </div>
          )}
          <div className="label">Senha:</div>
            <div className="input-wrapper">
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={senha}
                  className="input-field"
                  onChange={handleSenhaChange}
                  style={{
                    flex: '1',
                    marginRight: '0.5rem',
                    paddingRight: '3rem',
                    maxWidth: '100%',
                    backgroundColor: '#e9e9e9',
                    border: isSenhaValid ? 'none' : '2px solid red',
                    height: '2rem',
                    borderRadius: '5%',
                    fontSize: '16px'
                  }}
                />
                {showPassword ? (
                  <FaEye
                    onClick={handleShowPassword}
                    style={{
                      ...eyeIconStyle,
                      right: '0.5rem'
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handleShowPassword}
                    style={{
                      ...eyeIconStyle,
                      right: '0.5rem'
                    }}
                  />
                )}
              </div>
            </div>
          {!isSenhaValid && (
            <div style={{ color: 'red', fontSize: '14px', textAlign: 'left', marginBottom: '0.5rem' }}>
              Senha muito curta (mínimo 6 caracteres).
            </div>
          )}

        <div className="label">Confirmar Senha:</div>
  <div className="input-wrapper">
    <div style={{ position: 'relative' }}>
      <input
        type={showPasswordConfirm ? 'text' : 'password'}
        id="confirmarSenha"
        value={confirmarSenha}
        className="input-field"
        onChange={handleConfirmarSenhaChange}
        style={{
          flex: '1',
          marginRight: '0.5rem',
          paddingRight: '3rem',
          maxWidth: '100%',
          backgroundColor: '#e9e9e9',
          border: 'none',
          height: '2rem',
          borderRadius: '5%',
          fontSize: '16px'
        }}
      />
      {showPasswordConfirm ? (
        <FaEye
          onClick={handleShowPasswordConfirm}
          style={{
            ...eyeIconStyle,
            right: '0.5rem'
          }}
        />
      ) : (
        <FaEyeSlash
          onClick={handleShowPasswordConfirm}
          style={{
            ...eyeIconStyle,
            right: '0.5rem'
          }}
        />
      )}
    </div>
  </div>
        </div>
        {/* Segunda coluna */}
        <div style={{ flex: 1, marginLeft: '1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop:'80px'}}>
          <div style={{ textAlign: 'left', width: '100%' }}>
            <div className="label">Tipo de Usuário:</div>
            <div className="select-wrapper">
              <select value={tipoUsuario} onChange={handleTipoUsuarioChange} className="select-field">
                <option value="Professor">Usuário Professor</option>
                <option value="Visitante">Usuário Visitante</option>
              </select>
            </div>
          </div>
          <div className="login-buttons" style={{paddingLeft:'120px'}}>
            <Link to="/" className="button button-cancel link-no-underline">Cancelar</Link>
            <Link to="/cadastro" className="button button-login link-no-underline" onClick={handleCadastro}>Confirmar</Link>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default CadastroScreen;
