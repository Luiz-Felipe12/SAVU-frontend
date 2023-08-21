import React from 'react';
import { FaBars, FaUser, FaBuilding } from 'react-icons/fa';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import './scroll.css';

const DescricaoScreen = () => {

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
          <div>
            <h1 style={{ margin: 0 }}>Visitas</h1>
            <p style={{ margin: 0, fontSize: '18px', marginLeft: '0.2rem' }}>Detalhes dos tipos de visitas cadastrados no sistema</p>
          </div>
        </div>

        {/* Detalhes das visitas */}
        <Row style={{ marginTop: '2rem' }}>
          {visitas.map((visita, index) => (
            <Col key={index} xs={12} md={6} style={{ marginBottom: '2rem' }}>
              <h2 style={{fontWeight: 'bold',}}>{visita.titulo}</h2>
              <p>{visita.descricao}</p>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Tempo de duração: <span style={{ fontWeight: 'normal', fontSize: 'inherit' }}>{visita.duracao}</span></p>
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
    </div>
  );
};

export default DescricaoScreen;
