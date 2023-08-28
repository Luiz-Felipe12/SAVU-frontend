import React, { useState } from 'react';
import { FaBars, FaUser, } from 'react-icons/fa';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './login.css';
import './scroll.css';
import TopBarConta from '../components/topBarConta';

const ContaScreen = () => {

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
        <div style={{ background: '#EDEDEE', minHeight: '100vh', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Bar */}
            <TopBarConta />

            {/* Conteúdo Principal */}
            <Container style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="custom-carousel">
                {/* Bloco Agendamentos */}
                <div style={{ display: 'flex', alignItems: 'center', padding: 'rem', marginBottom: '.8rem' }}>
                    <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'white', padding: '1rem', marginTop: '0.5rem', marginRight: '1rem', borderRadius: '30%' }}>
                        <FaUser size={32} />
                    </div>
                    <div>
                        <h1 style={{ margin: 0 }}>Gerenciar Perfil</h1>
                        <p style={{ margin: 0, fontSize: '18px', marginLeft: '0.2rem' }}>Alterar os dados do seu Perfil</p>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '2rem', marginTop: '0.3rem', width: '100%', maxWidth: '330px', borderRadius: '8%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Primeira coluna */}
                    <div style={{ flex: 1, marginRight: '1rem', textAlign: 'center' }}>
                        <h1 style={{ color: '#393C47', textAlign: 'left' }}>Conta</h1>
                        <div className="label">Nome:</div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                value={nome}
                                onChange={handleNomeChange}
                                className="input-field"
                                style={{ border: isNomeValid ? 'none' : '2px solid red', maxWidth: '300px' }}
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

                        <div className="login-buttons" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <Link to="/" className="button button-cancel link-no-underline">Cancelar</Link>
                            <Link to="/cadastro" className="button button-login link-no-underline" onClick={handleCadastro}>Atualizar</Link>
                        </div>
                        <div style={{ alignItems: 'start', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
                            <Link to="/trocarsenha" className="button button-enviar link-no-underline">Alterar Senha</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContaScreen;
