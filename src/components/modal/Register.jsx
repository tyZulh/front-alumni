import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';
import { UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';

import axios from 'axios';

import './Register.css';

function Register(props) {
  const [jobList, setJobList] = useState([]);
  const [firstname, setFirstName] = useState('ok');
  const [admin, setAdmin] = useState(0);
  const [validate, setValidate] = useState(1);
  const [lastname, setLastName] = useState('ok');
  const [email, setEmail] = useState('ok');
  const [password, setPassword] = useState('ok');
  const [confirmPassword, setConfirmPassword] = useState('ok');
  const [idSchool1, setIdSchool1] = useState('');
  const [idSchool2, setIdSchool2] = useState('');
  const [job_categorie_id, setJobCategorieId] = useState('');
  const [year1, setyear1] = useState('');
  const [year2, setyear2] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5006/users/job').then((res) => {
      setJobList(res.data);
    });
  }, []);

  const info = {
    firstname,
    lastname,
    email,
    password,
    validate,
    admin,
    job_categorie_id,
    idSchool1,
    idSchool2,
    year1,
    year2,
  };

  const handleOk = () => {
    if (firstname && lastname && email && password && confirmPassword && idSchool1 && job_categorie_id && year1 && password === confirmPassword) {
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
    setIdSchool1(parseInt(value));
  };

  const handleChangeTwo = (value) => {
    setIdSchool2(parseInt(value));
  };

  const onChange = (date, dateString) => {
    setyear1(parseInt(dateString));
  };

  const onChangeTwo = (date, dateString) => {
    setyear2(parseInt(dateString));
  };

  const prof = (value) => {
    setJobCategorieId(value);
  };

  return (
    <>
      <Modal title="Inscription" visible={props.openModal} onOk={handleOk} onCancel={handleCancel} okText="Suivant" cancelText="Annuler">
        <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom *" prefix={<UserOutlined />} />

        <Input value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Nom *" prefix={<UserOutlined />} required="required" />

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
              <Option value="1">College de droit</Option>
              <Option value="2">Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '120%' }} placeholder="Année de diplôme *" onChange={onChange} picker="year" />
            </Space>
          </div>
          <div className="dateJob">
            <Select style={{ width: '50%' }} placeholder="Sélectionner votre cursus" onChange={handleChangeTwo}>
              <Option value="1">College de droit</Option>
              <Option value="2">Ecole de droit</Option>
              <Option value=""></Option>
            </Select>
            <Space direction="vertical">
              <DatePicker style={{ width: '120%' }} placeholder="Année de diplôme" onChange={onChangeTwo} picker="year" />
            </Space>
          </div>
          <Select style={{ width: '100%' }} defaultValue="Profession actuelle" onChange={prof}>
            {jobList.length &&
              jobList.map((job) => {
                return (
                  <Option key={job.id} value={job.id}>
                    {job.job}
                  </Option>
                );
              })}
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