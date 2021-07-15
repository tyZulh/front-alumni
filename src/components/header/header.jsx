import React, { useState, useEffect } from 'react';
import Logo from './img/logoo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import Register from '../modal/Register';
import Registertwo from '../modal/RegisterTwo';
import axios from 'axios';
import './header.css';

export default function header() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [infoModal1, setInfoModal1] = useState();
  const [infoModal2, setInfoModal2] = useState();

  const object3 = { ...infoModal1, ...infoModal2 };

  useEffect(() => {
    if (infoModal1 && infoModal2) {
      console.log('envoyer au back', object3);
      axios.post('http://localhost:5006/users/', object3);
    }
  }, [object3]);

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
              Inscription
            </Button>
            <Button type="primary" className="headerBtn">
              Connexion
            </Button>
          </Col>
        </Row>
      </Container>
      <Register
        info={(value) => {
          setInfoModal1(value);
        }}
        openModal={openModal}
        close={(value) => setOpenModal(value)}
        next={(value) => setOpenModalTwo(value)}
      />
      <Registertwo
        openModalTwo={openModalTwo}
        openTwo={(value) => setOpenModalTwo(value)}
        close={(value) => setOpenModalTwo(value)}
        info2={(value) => {
          setInfoModal2(value);
        }}
      />
    </>
  );
}
