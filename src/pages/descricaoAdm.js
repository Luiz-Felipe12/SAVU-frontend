import React, { useState } from 'react';
import { FaBars, FaUser, FaBuilding, FaPlus, FaImage  } from 'react-icons/fa';
import { Container, Row, Col, Carousel, Modal, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import './scroll.css';

const DescricaoAdmScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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


  const visitas = [
    {
      titulo: 'Visita 1',
      descricao: 'Esta visita oferece uma introdução detalhada às instalações da universidade. Os visitantes terão a oportunidade de explorar as salas de aula, laboratórios e áreas comuns, conhecendo de perto o ambiente acadêmico.',
      duracao: '1 hora',
      imagens: ['/imgs/ufape1.jpg', '/imgs/ufape2.jpg', '/imgs/ufape3.jpg'],
    },
    {
      titulo: 'Visita 2',
      descricao: 'A Visita 2 é focada na interação dos visitantes com os professores e alunos. Durante essa experiência, os participantes poderão participar de palestras e demonstrações interativas nas áreas de estudo de seu interesse.',
      duracao: '2 horas',
      imagens: ['/imgs/ufape1.jpg', '/imgs/ufape2.jpg', '/imgs/ufape3.jpg'],
    },
    {
      titulo: 'Visita 3',
      descricao: 'Nesta visita, os visitantes terão a chance de explorar as instalações esportivas da universidade, incluindo quadras esportivas, piscina e academia. Além disso, serão apresentadas as atividades esportivas oferecidas aos estudantes.',
      duracao: '3 horas',
      imagens: ['/imgs/ufape1.jpg', '/imgs/ufape2.jpg', '/imgs/ufape3.jpg'],
    },
    {
      titulo: 'Visita 4',
      descricao: 'A Visita 4 é uma oportunidade para os participantes conhecerem as iniciativas de pesquisa e desenvolvimento da universidade. Serão apresentados projetos inovadores nas áreas de tecnologia, ciências sociais e muito mais.',
      duracao: '4 horas',
      imagens: ['/imgs/ufape1.jpg', '/imgs/ufape2.jpg', '/imgs/ufape3.jpg'],
    },
    // Adicione mais objetos para cada visita
  ];

  return (
    <div style={{ background: '#EDEDEE', minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Top Bar */}
      <div style={{ background: '#2e3039', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBars style={{ marginRight: '1rem', cursor: 'pointer' }} />
        </div>
        <h2 style={{ margin: 0 }}>SAVU</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ marginRight: '1rem' }} />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <Container style={{ padding: '2rem' }} className="custom-carousel">
        {/* Bloco Agendamentos */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', paddingLeft: '0rem' }}>
          <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'white', padding: '1rem', marginTop: '0.5rem', marginRight: '1rem', borderRadius: '30%' }}>
            <FaBuilding size={32} />
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0 }}>Visitas</h1>
            <p style={{ margin: 0, fontSize: '18px', marginLeft: '0.2rem' }}>Detalhes dos tipos de visitas cadastrados no sistema</p>
          </div>
          <button onClick={() => setShowModal(true)} className="button button-agendar link-no-underline">
            <FaPlus style={{ marginRight: '0.5rem' }} />
            Cadastrar Visita
          </button>
        </div>

        {/* Detalhes das visitas */}
        <Row style={{ marginTop: '2rem' }}>
          {visitas.map((visita, index) => (
            <Col key={index} xs={12} md={6} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontWeight: 'bold' }}>{visita.titulo}</h2>
              <p>{visita.descricao}</p>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Tempo de duração: <span style={{ fontWeight: 'normal', fontSize: 'inherit' }}>{visita.duracao}</span>
              </p>
              <Carousel>
                {visita.imagens.map((imagem, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <img
                      className="d-block w-100"
                      src={imagem}
                      alt={`Imagem ${imgIndex + 1}`}
                      style={{ maxHeight: '300px', objectFit: 'cover', width: '100%', margin: '0 auto' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      {/* Modal de Cadastro */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Visita</Modal.Title>
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
            <label style={{ marginBottom: '0.5rem' }}>Tempo de Duração:</label>
            <InputMask
              mask="99:99"
              maskChar={null}
              placeholder="Exemplo: 02:30"
              className="custom-input"
              onChange={(e) => {
                // Aqui você pode fazer a validação do formato se necessário
              }}
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
    </div>
  );
};

export default DescricaoAdmScreen;
