import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router';
import React, { useState, } from 'react';
import { Popover, OverlayTrigger, Modal, Button, FormControl } from 'react-bootstrap';
import { FaEllipsisV, FaClipboardList, FaCalendarAlt, FaBars, FaUser, FaQuestion, FaPlus, FaEdit, FaTrashAlt, FaSearch, FaFileAlt, FaKey, FaSignOutAlt, FaCog } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR'; // Importa a localização em português
import './login.css'; // Importa seu arquivo CS
import TopBar from '../components/topBar';

const PrincipalScreen = () => {
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
  const [showHabilitarVagasModal, setShowHabilitarVagasModal] = useState(false);
  const [selectedTipoVisita, setSelectedTipoVisita] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("12:00-14:00"); // Defina o valor inicial desejado

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleTimeRangeChange = (event) => {
    setSelectedTimeRange(event.target.value);
  };

  const handleRemoveSelectedFile = (file) => {
    setSelectedFiles((prevSelected) => prevSelected.filter((f) => f !== file));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 3) {
      alert('Máximo de 3 imagens permitido.');
      return;
    }
    setSelectedFiles((prevSelected) => [...prevSelected, ...files]);
    e.target.value = null; // Clear the input
  };

  // Função para abrir o modal de "Habilitar Vagas"
  const handleShowHabilitarVagas = () => {
    setShowHabilitarVagasModal(true);
  };

  // Função para fechar o modal de "Habilitar Vagas"
  const handleCloseHabilitarVagas = () => {
    setShowHabilitarVagasModal(false);
    setSelectedTipoVisita('');
    setSelectedDate(null);
    // Limpar outros estados aqui
  };

  // Função para lidar com a seleção de tipo de visita
  const handleTipoVisitaChange = (event) => {
    const selectedTipo = event.target.value;
    setSelectedTipoVisita(selectedTipo);
    // Aqui você pode fazer a lógica para atualizar as datas associadas ao tipo de visita selecionado
  };

  // Função para lidar com a seleção de data
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeRange('');
  };

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const navigate = useNavigate(); // Usando useNavigate

  const handleCount = () => {
    // Realize as ações necessárias para fazer logout, como limpar tokens de autenticação, etc.
    // Em seguida, navegue para a tela de login
    navigate('/conta');
  };
  const handleLogout = () => {
    // Realize as ações necessárias para fazer logout, como limpar tokens de autenticação, etc.
    // Em seguida, navegue para a tela de login
    navigate('/');
  };

  const handleVisitasAgendadas = () => {
    navigate('/home');
  };

  const handleDetalhesVisita = () => {
    navigate('/tipo');
  };

  const getDateColor = (date) => {
    if (selectedTipoVisita === 'visita1' && date.getDate() === 10) {
      return 'date-color-1';
    }
    if (selectedTipoVisita === 'visita2' && date.getDate() === 15) {
      return 'date-color-2';
    }
    return ''; // Retorna uma string vazia para outras datas
  }

  return (
    <div style={{ background: '#EDEDEE', height: '100vh' }}>
      {/* Usando o componente TopBar */}
      <TopBar />

      {/* Conteúdo Principal */}
      <div style={{ padding: '2rem' }}>
        {/* Bloco Agendamentos */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', paddingLeft: '0rem' }}>
          <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'white', padding: '1rem', marginTop: '0.5rem', marginRight: '1rem', borderRadius: '30%' }}>
            <FaCalendarAlt size={32} />
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Visitas Agendadas</h1>
            <p style={{ margin: 0, fontSize: '18px', marginLeft: '0.2rem' }}>Histórico dos meus agendamentos de visitas</p>
          </div>
        </div>

        {/* Barra de Pesquisa e Botões */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'white', borderRadius: '5px', border: '1px solid #ccc', padding: '0.5rem', marginTop: '1.5rem' }}>
            <FaSearch style={{ marginLeft: '0.5rem', marginRight: '0.5rem', fontSize: '16px' }} />
            <input type="text" placeholder="Pesquisar..." style={{ padding: '0.5rem', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '14px' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/tipo" className="button button-tipo link-no-underline" >
              <FaQuestion style={{ marginRight: '0.5rem' }} />
              Tipo de Visitas
            </Link>

            <button onClick={() => setShowHabilitarVagasModal(true)} className="button button-agendar link-no-underline">
              <FaPlus style={{ marginRight: '0.5rem' }} />
              Agendar uma visita
            </button>
          </div>
        </div>


        <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}>
          {/* Tabela de Dados */}
          {/* Cabeçalho */}
          <div style={{ display: 'flex', borderBottom: '1px solid #ccc', background: 'white', padding: '1rem', fontWeight: 'bold', fontSize: '18px', gap: '1rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <div style={{ flex: '1' }}>Visita</div>
            <div style={{ flex: '1' }}>Data</div>
            <div style={{ flex: '1' }}>Horário início</div>
            <div style={{ flex: '1' }}>Horário término</div>
            <div style={{ flex: '1' }}>Status</div>
            <div style={{ flex: '1', textAlign: 'center' }}>Gerenciar</div>

          </div>

          {/* Linha de Dados (Exemplo) */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'white', padding: '1rem', gap: '1rem', fontSize: '16px' }}>
            {/* Linha de Dados */}
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
              <div style={{ flex: '1' }}>Visita 1</div>
              <div style={{ flex: '1' }}>07-08-2023</div>
              <div style={{ flex: '1' }}>09:00 AM</div>
              <div style={{ flex: '1' }}>11:00 AM</div>
              <div style={{ flex: '1' }}>Agendada</div>
              <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={handleEditClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '1rem' }}>
                  <FaEdit size={20} style={iconStyle} />
                </button>
                <button onClick={handleDeleteClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                  <FaTrashAlt size={20} style={iconStyle} />
                </button>
              </div>
            </div>


            {/* Outra Linha de Dados */}
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
              <div style={{ flex: '1' }}>Visita 2</div>
              <div style={{ flex: '1' }}>08-08-2023</div>
              <div style={{ flex: '1' }}>10:00 AM</div>
              <div style={{ flex: '1' }}>12:00 PM</div>
              <div style={{ flex: '1' }}>Concluída</div>
              <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={handleEditClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '1rem' }}>
                  <FaEdit size={20} style={iconStyle} />
                </button>
                <button onClick={handleDeleteClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                  <FaTrashAlt size={20} style={iconStyle} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal de Habilitar Vagas */}
      <Modal show={showHabilitarVagasModal} onHide={handleCloseHabilitarVagas}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar uma Visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: '1rem' }}>
            <label>Tipo de Visita:</label>
            <select className="custom-input" value={selectedTipoVisita} onChange={handleTipoVisitaChange}>
              <option value="">Selecione um tipo de visita</option>
              <option value="visita1">Visita 1</option>
              <option value="visita2">Visita 2</option>
              <option value="visita3">Visita 3</option>
              {/* Adicione outras opções conforme necessário */}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Data:</label>
            <div style={{ marginTop: '0.5rem' }}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                locale={ptBR} // Passando o locale em portuguê
                dayClassName={(date) => getDateColor(date)}
                className='custom-input'
              />
            </div>
            {/* Campo de Horário da Visita */}
            {selectedDate && (
              <div style={{ marginBottom: '1rem' }}>
                <label>Horário da Visita:</label>
                <div style={{ marginTop: '0.5rem' }}>
                  <FormControl
                    type="text"
                    value={"12:00-14:00"} // Usando o estado para definir o valor
                    readOnly
                    className="custom-input"
                  />
                </div>
              </div>
            )}

          </div>
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className="button button-cancel link-no-underline" variant="secondary" onClick={handleCloseHabilitarVagas}>
            Cancelar
          </Button>
          <Button className="button button-login link-no-underline" variant="primary" onClick={handleCloseHabilitarVagas}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

    </div >
  );
};

export default PrincipalScreen;
