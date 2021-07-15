import React, { useState } from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';
import { UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';

import './Register.css';

function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lawSchool, setLawsSchool] = useState('');
  const [lawCollege, setLawCollege] = useState('');
  const [profession, setProfession] = useState('');
  const [dateOne, setDateOne] = useState('');
  const [dateTwo, setDateTwo] = useState('');

  const info = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    lawSchool,
    lawCollege,
    dateOne,
    dateTwo,
    profession,
  };

  const handleOk = () => {
    if (firstName && lastName && email && password && confirmPassword && lawSchool && profession && dateOne) {
      props.info(info);
      props.close(false);
      props.next(true);
      let confirmOK = document.querySelector('.confirm');
      confirmOK.style.display = 'none';
    } else {
      let confirm = document.querySelector('.confirm');
      confirm.style.display = 'block';
    }
  };

  const handleCancel = () => {
    props.close(false);
  };

  const { Option } = Select;

  const handleChange = (value) => {
    setLawsSchool(value);
  };

  const handleChangeTwo = (value) => {
    setLawCollege(value);
  };

  const onChange = (date, dateString) => {
    setDateOne(dateString);
  };

  const onChangeTwo = (date, dateString) => {
    setDateTwo(dateString);
  };

  const prof = (value) => {
    setProfession(value);
  };
  return (
    <>
      <Modal title="Inscription" visible={props.openModal} onOk={handleOk} onCancel={handleCancel} okText="Suivant" cancelText="Annuler">
        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom *" prefix={<UserOutlined />} />

        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom *" prefix={<UserOutlined />} required="required" />

        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" prefix={<MailOutlined />} required="required" />

        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrer votre mot de passe * " />

        <Input.Password
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmer votre mot de passe *"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />

        <div className="date-job-box">
          <div className="dateJob">
            <Select style={{ width: '50%' }} placeholder="Sélectionner votre cursus *" onChange={handleChange}>
              <Option value="College de droit">College de droit</Option>
              <Option value="Ecole de droit">Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '120%' }} placeholder="Année de diplôme *" onChange={onChange} picker="year" />
            </Space>
          </div>
          <div className="dateJob">
            <Select style={{ width: '50%' }} placeholder="Sélectionner votre cursus" onChange={handleChangeTwo}>
              <Option value="College de droit">College de droit</Option>
              <Option value="Ecole de droit">Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '120%' }} placeholder="Année de diplôme" onChange={onChangeTwo} picker="year" />
            </Space>
          </div>
          <Select style={{ width: '100%' }} defaultValue="Profession actuelle *" onChange={prof}>
            <Option value="Administrateur judiciaire">Administrateur judiciaire</Option>
            <Option value="Avocat">Avocat</Option>
            <Option value="Avocat au Conseil d'Etat et à la Cour de cassation">Avocat au Conseil d&apos;Etat et à la Cour de cassation</Option>
            <Option value="Commissaire de justice">Commissaire de justice</Option>
            <Option value="Etudiant">Etudiant</Option>
            <Option value="Fonctionnaire">Fonctionnaire</Option>
            <Option value="Juriste d'entreprise">Juriste d&apos;entreprise</Option>
            <Option value="Magistrat">Magistrat</Option>
            <Option value="Notaire">Notaire</Option>
            <Option value="Officier">Officier</Option>
            <Option value="Universitaire">Universitaire</Option>
            <Option value="Autres métiers de la justice">Autres métiers de la justice</Option>
            <Option value="Autres métiers">Autres métiers</Option>
          </Select>
        </div>
        <div>
          <p className="confirm"> Veuillez remplir tous les champs *</p>
        </div>
      </Modal>
    </>
  );
}

export default Register;
