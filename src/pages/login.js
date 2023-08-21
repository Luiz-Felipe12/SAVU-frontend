import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
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
    <div>
      <div className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '35px'}}>
          <img className="icons" src={"/imgs/icons8-brasil-48.png"} alt="Bandeira do Brasil" />
          <span className='brasil-span'>Brasil</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <span style={{ color: 'red', marginRight: '20px' }}>
            CORONAVÍRUS (COVID-19)
          </span>
          <span style={{ marginRight: '20px' }}>
            Simplifique
          </span>
          <span style={{ marginRight: '20px' }}>
            Participe
          </span>
          <span style={{ marginRight: '20px' }}>
            Acesso às Informações
          </span>
          <span style={{ marginRight: '20px' }}>
            Legislação
          </span>
          <span style={{ marginRight: '20px' }}>
            Canais
          </span>
          <span>
            <img style={{ marginTop: '3px' }} className="icons" src={"/imgs/acessibilidade.png"} alt="Acessibilidade" />
          </span>
        </div>
      </div>
      <div style={{ background: '#EDEDEE', height: 'calc(100vh - 30px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <h1 style={{ color: '#393C47', fontSize: '70px', marginBottom: '1rem', marginRight:'4rem', marginTop:'3rem' }}>SAVU</h1>
        <img src="/imgs/logo.png" alt="Logo" style={{ width: '100px', marginTop: '3rem', position: 'absolute', top: '100px', left: '49.5%', transform: 'translateX(-50%)', marginLeft:'8rem' }} />
        <h2 style={{ marginTop: '2rem', color: '#393C47'}}>Sistema de Agendamento de Visitas à UFAPE</h2>
        <div style={{ background: 'white', padding: '1rem', marginTop: '1rem', width: '400px', height: '350px', textAlign: 'center', borderRadius: '10%', boxshadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ color: '#393C47', fontSize: '40px' }}>Login</h1>
          <div style={{ fontSize: '20px', textAlign: 'left' }}>Email:</div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative' }}>
            <input placeholder="Digite seu e-mail" type="email" id="email" value={email} onChange={handleEmailChange} className="input-field" style={{ flex: '1', marginRight: '0.5rem', width: '100%', border: 'none', backgroundColor: '#e9e9e9', height: '2rem', borderRadius: '5%', fontSize: '19px' }} />
          </div>
          <div style={{ fontSize: '20px', textAlign: 'left' }}>Senha:</div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', position: 'relative'}}>
            <input placeholder="Digite sua senha" type={showPassword ? 'text' : 'password'} id="password" value={password} className="input-field" onChange={handlePasswordChange} style={{ flex: '1', marginRight: '0.5rem', paddingRight: '3rem', maxWidth: '100%', backgroundColor: '#e9e9e9', border: 'none', height: '2rem', borderRadius: '5%', fontSize: '19px' }} />
            {showPassword ? (
              <FaEye onClick={handleShowPassword} style={eyeIconStyle} />
            ) : (
              <FaEyeSlash onClick={handleShowPassword} style={eyeIconStyle} />
            )}
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <Link to="/recuperar" className="link_recovery_password link-no-underline">Esqueceu a Senha?</Link>
          </div>
          <div className="login-buttons" style={{ paddingTop: '20px', paddingBottom: '20px', alignItems: 'center' }}>
            <Link to="/cadastro" className="button button-register link-no-underline">Cadastrar</Link>
            <Link to="/home" className="button button-login link-no-underline" onClick={handleLogin}>Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
