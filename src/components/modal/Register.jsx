/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';
import { UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';

import './Register.css';

function Register(props) {
  const handleOk = () => {
    props.close(false);
    props.next(true);
  };

  const handleCancel = () => {
    props.close(false);
  };

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <Modal title="Inscription" visible={props.openModal} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Prénom" prefix={<UserOutlined />} required="required" />
        <Input placeholder="Nom" prefix={<UserOutlined />} required="required" />
        <Input placeholder="Email" prefix={<MailOutlined />} required="required" />
        <Input.Password placeholder="Entrer votre mot de passe " />
        <Input.Password placeholder="Confirmer votre mot de passe" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

        <div className="date-job-box">
          <div className="dateJob">
            <Select style={{ width: '50%' }} placeholder="Sélectionner votre cursus" onChange={handleChange}>
              <Option value="College de droit">College de droit</Option>
              <Option value="Ecole de droit">Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '110%' }} placeholder="Année de diplôme" onChange={onChange} picker="year" />
            </Space>
          </div>
          <div className="dateJob">
            <Select style={{ width: '50%' }} placeholder="Sélectionner votre cursus" onChange={handleChange}>
              <Option value="College de droit">College de droit</Option>
              <Option value="Ecole de droit">Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '110%' }} placeholder="Année de diplôme" onChange={onChange} picker="year" />
            </Space>
          </div>
          <Select style={{ width: '100%' }} defaultValue="Profession actuelle" onChange={handleChange}>
            <Option value="Administrateur judiciaire">Administrateur judiciaire</Option>
            <Option value="Avocat">Avocat</Option>
            <Option value="Avocat au Conseil d'Etat et à la Cour de cassation">Avocat au Conseil d'Etat et à la Cour de cassation</Option>
            <Option value="Commissaire de justice">Commissaire de justice</Option>
            <Option value="Etudiant">Etudiant</Option>
            <Option value="Fonctionnaire">Fonctionnaire</Option>
            <Option value="Juriste d'entreprise">Juriste d'entreprise</Option>
            <Option value="Magistrat">Magistrat</Option>
            <Option value="Notaire">Notaire</Option>
            <Option value="Officier">Officier</Option>
            <Option value="Universitaire">Universitaire</Option>
            <Option value="Autres métiers de la justice">Autres métiers de la justice</Option>
            <Option value="Autres métiers">Autres métiers</Option>
          </Select>
        </div>
      </Modal>
    </>
  );
}

export default Register;
