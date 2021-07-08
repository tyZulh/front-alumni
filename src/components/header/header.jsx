import React, { useState } from 'react';
import Logo from './img/logoo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import Inscription from '../modal/Inscription';
import './header.css';

export default function header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9} style={{ display: 'flex', alignContent: 'flex-start', alignItems: 'center' }}>
            <img src={Logo} alt="logo" style={{ width: '20%' }} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            style={{ display: 'flex', flexDirection: 'column', margin: 'auto', height: 'auto', justifyContent: 'center' }}>
            <Button type="primary" className="headerBtn" onClick={() => setOpenModal(true)}>
              {/* faire un onclick qui appelle change le state en true*/}
              Inscription
            </Button>
            <Button type="primary" className="headerBtn">
              Connexion
            </Button>
          </Col>
          {/* appeeler modale et passé en props le states */}
        </Row>
      </Container>
      <Inscription openModal={openModal} close={(value) => setOpenModal(value)} />
    </>
  );
}
