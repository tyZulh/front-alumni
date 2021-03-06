import React, { useState, useEffect } from 'react';
import { Modal, Input, DatePicker, Space, Select } from 'antd';
import { UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';

import './Register.css';

function Register(props) {
  const [jobList, setJobList] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [admin, setAdmin] = useState(0);
  const [validate, setValidate] = useState(0);
  const [lastname, setLastName] = useState('ok');
  const [email, setEmail] = useState('ok');
  const [password, setPassword] = useState('ok');
  const [confirmPassword, setConfirmPassword] = useState('ok');
  const [idSchool1, setIdSchool1] = useState();
  const [idSchool2, setIdSchool2] = useState();
  const [job_categorie_id, setJobCategorieId] = useState();
  const [year1, setyear1] = useState();
  const [year2, setyear2] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [invalidEmail, setInvalidEmail] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/jobs`).then((res) => {
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

  const ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      setInvalidEmail(true);
      return true;
    } else {
      return false;
    }
  };

  const handleOk = async () => {
    if (ValidateEmail(email)) {
      setInvalidEmail(false);
      try {
        // await axios.get(`${import.meta.env.VITE_API_URL}/users/check/${email}`);
        if (firstname && lastname && email && password && confirmPassword && idSchool1 && job_categorie_id && year1 && password === confirmPassword) {
          props.info(info);
          props.close(false);
          props.next(true);
          let confirmOK = document.querySelector('.confirm');
          confirmOK.style.display = 'none';
          setFirstName('');
          setLastName('ok');
          setEmail('');
          setPassword('ok');
          setConfirmPassword('ok');
          setIdSchool1();
          setIdSchool2();
          setJobCategorieId();
          setyear1('');
          setyear2('');
        } else {
          let confirm = document.querySelector('.confirm');
          confirm.style.display = 'block';
        }
      } catch (e) {
        if (e.response.status === 400) {
          setErrorMessage(`L'adresse email est d??j?? associ??e ?? un utilisateur *`);
        }
      }
    } else {
      setInvalidEmail(true);
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
      <Modal
        className="modal-register"
        title="Inscription"
        visible={props.openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Suivant"
        cancelText="Annuler">
        <Input
          className="input-modal"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Pr??nom *"
          prefix={<UserOutlined />}
        />

        <Input
          className="input-modal"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nom *"
          prefix={<UserOutlined />}
          required="required"
        />

        <Input
          className="input-modal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          prefix={<MailOutlined />}
          required="required"
        />

        <Input.Password
          className="input-modal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe * "
        />

        <Input.Password
          className="input-modal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmez votre mot de passe *"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />

        <div className="date-job-box">
          <p className="cursus">Votre cursus au Coll??ge et ?? l&apos;Ecole de droit :</p>
          <div className="dateJob">
            <Select style={{ width: '50%' }} value={idSchool1} placeholder="S??lectionner votre cursus *" onChange={handleChange}>
              <Option value={1}>Coll??ge de droit</Option>
              <Option value={2}>Ecole de droit</Option>
            </Select>
            <Space direction="vertical">
              <DatePicker
                style={{ width: '120%' }}
                value={year1 ? moment(year1, 'YYYY') : null}
                placeholder="Ann??e de dipl??me *"
                onChange={onChange}
                picker="year"
              />
            </Space>
          </div>
          <div className="dateJob2">
            <Select style={{ width: '50%' }} value={idSchool2} placeholder="S??lectionner votre cursus" onChange={handleChangeTwo}>
              <Option value={1}>Coll??ge de droit</Option>
              <Option value={2}>Ecole de droit</Option>
              <Option value=""></Option>
            </Select>
            <Space direction="vertical">
              <DatePicker
                style={{ width: '120%' }}
                value={year2 ? moment(year2, 'YYYY') : null}
                placeholder="Ann??e de dipl??me"
                onChange={onChangeTwo}
                picker="year"
              />
            </Space>
          </div>
        </div>
        <Select id="my-select" style={{ width: '100%' }} value={job_categorie_id} placeholder="Profession actuelle" onChange={prof}>
          {jobList.length &&
            jobList.map((job) => {
              return (
                <Option key={job.id} value={job.id}>
                  {job.job}
                </Option>
              );
            })}
        </Select>
        <div>
          <p className="confirm"> Veuillez remplir tous les champs *</p>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {invalidEmail && <p style={{ color: 'red' }}>Votre email est incorrect *</p>}
        </div>
      </Modal>
    </>
  );
}

export default Register;
