import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Login from '../Login/login';
import axios from 'axios';
import './ModalLogin.css';

function ModalLogin(props) {
  const [valueLogin, setValueLogin] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (valueLogin !== null) {
      const handlePost = async () => {
        try {
          const result = await axios.post(`${import.meta.env.VITE_API_URL}/users/signIn`, valueLogin);
          localStorage.setItem('token', result.headers.accesstoken);
          localStorage.setItem('email', valueLogin.Email);
          handleCancel();
          document.location.reload();
        } catch (e) {
          if (e.response.status === 404) {
            setErrorMessage('Adresse email ou mot de passe non-valide');
          }
          if (e.response.status === 402) {
            setErrorMessage('Votre inscription est en cours de validation');
          }
        }
      };
      handlePost();
    }
  }, [valueLogin]);

  const handleOk = async () => {
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
        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
      </Modal>
    </>
  );
}

export default ModalLogin;
