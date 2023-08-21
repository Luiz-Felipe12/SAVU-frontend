import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleWhatsappChange = (e) => {
    setWhatsapp(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
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
            <input type="text" value={nome} onChange={handleNomeChange} className="input-field" />
          </div>
          <div className="label">Email:</div>
          <div className="input-wrapper">
            <input type="email" value={email} onChange={handleEmailChange} className="input-field" />
          </div>
          <div className="label">CPF:</div>
          <div className="input-wrapper">
            <input type="text" value={cpf} onChange={handleCpfChange} className="input-field" />
          </div>
          <div className="label">WhatsApp:</div>
          <div className="input-wrapper">
            <input type="text" value={whatsapp} onChange={handleWhatsappChange} className="input-field" />
          </div>
          <div className="label">Senha:</div>
          <div className="input-wrapper">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
              <input type={showPassword ? 'text' : 'password'} id="password" value={senha} className="input-field" onChange={handleSenhaChange} style={{ flex: '1', marginRight: '0.5rem', paddingRight: '12rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '16px' }} />
              {showPassword ? (
                <FaEye onClick={handleShowPassword} style={eyeIconStyle} />
              ) : (
                <FaEyeSlash onClick={handleShowPassword} style={eyeIconStyle} />
              )}
            </div>
          </div>
          <div className="label">Confirmar Senha:</div>
          <div className="input-wrapper">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
                <input type={showPasswordConfirm ? 'text' : 'password'} id="password" value={confirmarSenha} className="input-field" onChange={handleConfirmarSenhaChange} style={{ flex: '1', marginRight: '0.5rem', paddingRight: '12rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '16px' }} />
                {showPasswordConfirm ? (
                  <FaEye onClick={handleShowPasswordConfirm} style={eyeIconStyle} />
                ) : (
                  <FaEyeSlash onClick={handleShowPasswordConfirm} style={eyeIconStyle} />
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
