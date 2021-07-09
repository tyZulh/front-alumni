import React, { useState } from 'react';
import Logo from './img/logoo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import Register from '../modal/Register';
import Registertwo from '../modal/RegisterTwo';
import './header.css';

export default function header() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lawSchool, setLawsSchool] = useState('');
  const [lawCollege, setLawCollege] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, SetPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [job, SetJob] = useState('');
  const [company, SetCompany] = useState('');
  const [introduce, SetIntroduce] = useState('');

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
      <Register openModal={openModal} close={(value) => setOpenModal(value)} next={(value) => setOpenModalTwo(value)} />
      <Registertwo openModalTwo={openModalTwo} openTwo={(value) => setOpenModalTwo(value)} close={(value) => setOpenModalTwo(value)} />
    </>
  );
}
