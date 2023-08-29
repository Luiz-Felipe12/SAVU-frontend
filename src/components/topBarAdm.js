import React, { useState } from 'react';
import { FaBars, FaUser, FaCog, FaSignOutAlt, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopBarAdm = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showOptionsMenu, setShowOptionsMenu] = useState(false);
    const navigate = useNavigate();

    const handleCount = () => {
        navigate('/conta');
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleVisitasAgendadas = () => {
        navigate('/homeadm');
    };

    const handleDetalhesVisita = () => {
        navigate('/tipoadm');
    };

    return (
        <div style={{ background: '#2e3039', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <FaBars onClick={() => setShowOptionsMenu(!showOptionsMenu)} style={{ cursor: 'pointer' }} />
                    {showOptionsMenu && (
                        <div style={{ position: 'absolute', top: '100%', right: '-10rem', background: 'white', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', borderRadius: '5px', padding: '0.5rem', zIndex: 100 }}>
                            <div className="user-menu-item" onClick={handleVisitasAgendadas} style={{ color: '#2e3039', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <FaCalendarAlt style={{ marginRight: '0.5rem', fontSize: '1.25rem' }} />
                                <span style={{ marginRight: '0.5rem' }}>Visitas Agendadas</span>
                            </div>
                            <div style={{ borderTop: '1px solid #ccc', margin: '0.5rem 0' }}></div>
                            <div className="user-menu-item" onClick={handleDetalhesVisita} style={{ color: '#2e3039', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <FaClipboardList style={{ marginRight: '0.5rem', fontSize: '1.25rem' }} />
                                <span>Detalhes da Visita</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <h2>SAVU</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', marginRight: '1rem' }}>
                    <FaUser onClick={() => setShowUserMenu(!showUserMenu)} style={{ cursor: 'pointer' }} />
                    {showUserMenu && (
                        <div style={{ position: 'absolute', top: '100%', right: 0, background: 'white', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', borderRadius: '5px', padding: '0.5rem', zIndex: 100 }}>
                            <div className="user-menu-item" onClick={handleCount} style={{ color: '#2e3039', cursor: 'pointer' }}>
                                <FaCog style={{ marginRight: '0.5rem' }} />
                                Gerenciar Conta
                            </div>
                            <div style={{ borderTop: '1px solid #ccc', margin: '0.5rem 0' }}></div>
                            <div className="user-menu-item" onClick={handleLogout} style={{ color: '#2e3039', cursor: 'pointer' }}>
                                <FaSignOutAlt style={{ marginRight: '0.5rem' }} />
                                Sair
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBarAdm;
