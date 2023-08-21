import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import React, { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import { FaBars, FaUser, FaBuilding, FaPlus, FaImage , FaQuestion, FaCalendarAlt, FaEdit, FaTrashAlt,FaSearch,FaFileAlt,FaKey   } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR'; // Importa a localização em português
import './login.css'; // Importa seu arquivo CS


const PrincipalProfScreen = () => {

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
            <Link to="/tipo"className="button button-tipo link-no-underline" >
              <FaQuestion style={{ marginRight: '0.5rem' }} />
              Tipo de Visitas
            </Link>
          
            <button onClick={() => setShowModal(true)} className="button button-agendar link-no-underline">
              <FaFileAlt  style={{ marginRight: '0.5rem' }} />
              Solicitar tipo de visita
            </button>

            <button onClick={()=>setShowHabilitarVagasModal(true)}className="button button-agendar link-no-underline">
              <FaKey   style={{ marginRight: '0.5rem' }} />
              Habilitar Vagas
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
      {/* Modal */}
      {/* Modal de solicitar visita */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar um tipo de Visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nome:</label>
            <input type="text" className="custom-input" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Descrição:</label>
            <textarea className="custom-input" rows="4"></textarea>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom:'0.8rem' }}>
            <label style={{ marginBottom: '0.5rem' }}>Imagens:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="image-input" className="add-image-button">
                <FaImage  style={{ marginRight: '0.2rem', marginBottom:'0.3rem', marginLeft:'0.2rem' }} />
              </label>
              <input
                id="image-input"
                type="file"
                multiple
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <small style={{ color: 'red', marginLeft: '0.5rem' }}>Máximo de 3 imagens</small>
            </div>
          </div>
          {selectedFiles.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <label>Imagens selecionadas:</label>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'lightgray',
                        borderRadius: '5px',
                        padding: '0.3rem',
                        minWidth: '50px', // Defina o tamanho mínimo aqui
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{file.name}</span>
                      <button
                        className="btn remove-file-button"
                        onClick={() => handleRemoveSelectedFile(file)}
                        style={{ color: 'red', marginLeft: '0.5rem', padding: 0 }}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div style={{ marginBottom: '1rem' }}>
            <label>Data:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dayClassName={(date) => getDateColor(date)}
              locale={ptBR} // Define a localização em português
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className="button button-cancel link-no-underline" variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="button button-login link-no-underline" variant="primary" onClick={handleClose}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/*modal de habilitar vagas*/}
      {/* Modal de Habilitar Vagas */}
      <Modal show={showHabilitarVagasModal} onHide={handleCloseHabilitarVagas}>
        <Modal.Header closeButton>
          <Modal.Title>Habilitar Vagas para Visita</Modal.Title>
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
            <div style={{marginTop:'0.5rem'}}>
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

        
    </div>
  );
};

export default PrincipalProfScreen;