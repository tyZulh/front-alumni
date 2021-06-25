import React from 'react';
import Logo from './img/logoo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import './header.css';

export default function header() {
  return (
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
          <Button type="primary" className="headerBtn">
            Inscription
          </Button>
          <Button type="primary" className="headerBtn">
            Connexion
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
