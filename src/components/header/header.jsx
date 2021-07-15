import React, { useState } from 'react';
import Logo from './img/logoo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import Register from '../modal/Register';
import Registertwo from '../modal/RegisterTwo';
import ModalLogin from '../ModalLogin/ModalLogin';

import './header.css';
import { useEffect } from 'react';

export default function header() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [infoModal1, setInfoModal1] = useState();
  const [infoModal2, setInfoModal2] = useState();
  const [openLogin, setOpenLogin] = useState(false);

  const object3 = { ...infoModal1, ...infoModal2 };

  useEffect(() => {
    if (infoModal1 && infoModal2) {
      return object3;
    }
  }, [infoModal1, infoModal2]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'space-around' }}>
            <img className="logo-header" src={Logo} alt="logo" style={{ width: '10%' }} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            style={{ display: 'flex', flexDirection: 'row', margin: 'auto', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              type="primary"
              className="headerBtn"
              style={{ borderRadius: '25px', border: '1px solid #862628', backgroundColor: '#fafafa' }}
              onClick={() => setOpenModal(true)}>
              <span className="txt-btn-header">Inscription</span>
            </Button>
            <Button
              type="primary"
              className="headerBtn"
              style={{ borderRadius: '25px', border: '1px solid #862628', backgroundColor: '#fafafa' }}
              onClick={() => setOpenLogin(true)}>
              <span className="txt-btn-header">Connexion</span>
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
      <ModalLogin openLogin={openLogin} close={(value) => setOpenLogin(value)} />
    </>
  );
}
