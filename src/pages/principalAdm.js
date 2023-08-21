import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaQuestion, FaLock , FaCalendarAlt, FaEdit, FaTrashAlt,FaSearch } from 'react-icons/fa';
import './login.css';
import React, { useState } from 'react';

const PrincipalAdmScreen = () => {

  const [showModal, setShowModal] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [period, setPeriod] = useState('1 semana');

  const iconStyle = {
    marginRight: '0.5rem',
    verticalAlign: 'middle',
  };

  const handleEditClick = () => {
    console.log('Clicou em Editar');
    // Adicione sua lógica de edição aqui
  };

  const handleDeleteClick = () => {
    console.log('Clicou em Excluir');
    // Adicione sua lógica de exclusão aqui
  };

  return (
    <div style={{ background: '#EDEDEE', height: '100vh' }}>
      {/* Top Bar */}
      <div style={{ background: '#2e3039', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBars style={{ marginRight: '1rem', cursor: 'pointer' }} />
        </div>
        <h2>SAVU</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ marginRight: '1rem' }} />
        </div>
      </div>
      {/*modal de bloquei*/}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', width: '400px', fontSize: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '20px' }}>Bloquear/Desbloquear Usuário</h3>
              <button onClick={() => setShowModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px' }}>X</button>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ marginBottom: '0.5rem', fontSize: '18px' }}>Usuário Visitante:</label>
              <select style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', background: '#f2f2f2', fontSize: '16px', border: 'none' }}>
                <option value="opcao1">Irineu</option>
                <option value="opcao2">Adamastor</option>
                {/* Adicione mais opções conforme necessário */}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <label style={{ marginRight: '0.5rem', fontSize: '18px' }}>
                <input
                  type="checkbox"
                  checked={isBlocked}
                  onChange={() => setIsBlocked(!isBlocked)}
                  style={{ marginLeft: '0.5rem', width: '20px', height: '20px', background: '#f2f2f2', border: 'none', marginRight:'0.3rem' }}
                />
                Bloqueado
              </label>
            </div>
            {isBlocked && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ marginBottom: '0.5rem', fontSize: '18px' }}>Período:</label>
                <select value={period} onChange={(e) => setPeriod(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', background: '#f2f2f2', fontSize: '16px', border: 'none' }}>
                  <option value="1 semana">1 semana</option>
                  <option value="2 semanas">2 semanas</option>
                  <option value="3 semanas">3 semanas</option>
                  <option value="1 mês">1 mês</option>
                  <option value="2 meses">2 meses</option>
                  <option value="3 meses">3 meses</option>
                  <option value="1 ano">1 ano</option>
                </select>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <button className="button button-cancel link-no-underline" style={{ fontSize: '16px' }} onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="button button-login link-no-underline" style={{ fontSize: '16px' }} onClick={() => console.log('Confirmar')}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <div style={{ padding: '2rem' }}>
        {/* Bloco Agendamentos */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', paddingLeft:'0rem' }}>
          <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'white', padding: '1rem', marginTop: '0.5rem', marginRight:'1rem', borderRadius: '30%' }}>
            <FaCalendarAlt size={32} />
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Visitas Agendadas</h1>
            <p style={{ margin: 0,  fontSize:'18px', marginLeft:'0.2rem'}}>Histórico dos meus agendamentos de visitas</p>
          </div>
        </div>

        {/* Barra de Pesquisa e Botões */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'white', borderRadius: '5px', border: '1px solid #ccc', padding: '0.5rem', marginTop:'1.5rem' }}>
            <FaSearch style={{ marginLeft: '0.5rem', marginRight: '0.5rem', fontSize: '16px' }} />
            <input type="text" placeholder="Pesquisar..." style={{ padding: '0.5rem', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '14px' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>

            <Link onClick={() => setShowModal(true)} className="button button-bloquear link-no-underline">
              <FaLock  style={{ marginRight: '0.5rem' }} />
              Bloquear/Desbloquear Usuário
            </Link>
            <Link to="/tipoadm"className="button button-tipo link-no-underline" >
              <FaQuestion style={{ marginRight: '0.5rem' }} />
              Tipo de Visitas
            </Link>           
          </div>
        </div>

        <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}>
        {/* Tabela de Dados */}
        {/* Cabeçalho */}
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', background: 'white', padding: '1rem', fontWeight: 'bold', fontSize: '18px', gap: '1rem', alignItems: 'center', marginTop: '1.5rem', fontSize:'20px' }}>
          <div style={{ flex: '1' }}>Visita</div>
          <div style={{ flex: '1' }}>Data</div>
          <div style={{ flex: '1' }}>Horário início</div>
          <div style={{ flex: '1' }}>Horário término</div>
          <div style={{ flex: '1' }}>Status</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Visitante</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Professor</div>
          
        </div>

        {/* Linha de Dados (Exemplo) */}
        <div style={{ display: 'flex', flexDirection: 'column', background: 'white', padding: '1rem', gap: '1rem',  fontSize:'18px' }}>
          {/* Linha de Dados */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
            <div style={{ flex: '1' }}>Visita 1</div>
            <div style={{ flex: '1' }}>07-08-2023</div>
            <div style={{ flex: '1' }}>09:00 AM</div>
            <div style={{ flex: '1' }}>11:00 AM</div>
            <div style={{ flex: '1' , color:'#ffbc3b'}}>Agendada</div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Irineu
            </div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Mateus
            </div>
          </div>


          {/* Outra Linha de Dados */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0', fontSize:'18px' }}>
            <div style={{ flex: '1' }}>Visita 2</div>
            <div style={{ flex: '1' }}>08-08-2023</div>
            <div style={{ flex: '1' }}>10:00 AM</div>
            <div style={{ flex: '1' }}>12:00 PM</div>
            <div style={{ flex: '1', color:'#5aab80'}}>Realizada</div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Adamastor
            </div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Rodrigo
            </div>
          </div>
        </div>
        </div>
      </div>

        
    </div>
  );
};

export default PrincipalAdmScreen;
