import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Login from '../Login/login';

import './ModalLogin.css';

function ModalLogin(props) {
  const [valueLogin, setValueLogin] = useState(null);
  useEffect(() => {
    if (valueLogin !== null) {
      console.log('jesuis la', valueLogin);
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
