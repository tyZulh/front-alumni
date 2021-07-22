import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Login from '../Login/login';
import axios from 'axios';
import './ModalLogin.css';

function ModalLogin(props) {
  const [valueLogin, setValueLogin] = useState(null);
  useEffect(() => {
    if (valueLogin !== null) {
      const handlePost = async () => {
        const result = await axios.post('http://localhost:5006/users/signIn', valueLogin);
        localStorage.setItem('token', result.headers.accesstoken);
        localStorage.setItem('email', valueLogin.Email);
        handleCancel();
        document.location.reload();
      };
      handlePost();
    }
  }, [valueLogin]);

  const handleOk = () => {
    props.close(false);
  };

  const handleCancel = () => {
    props.close(false);
  };

  return (
    <>
      <Modal
        title="Connexion"
        visible={props.openLogin}
        onOk={handleOk}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}>
        <Login loginValue={(value) => setValueLogin(value)} />
      </Modal>
    </>
  );
}

export default ModalLogin;
