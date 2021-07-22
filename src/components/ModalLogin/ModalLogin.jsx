import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Login from '../Login/login';

import './ModalLogin.css';

function ModalLogin(props) {
  const [valueLogin, setValueLogin] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (valueLogin !== null) {
      console.log('Tkt Thomas on garde juste ce console.log');
    }
  }, [valueLogin]);

  const handleOk = () => {
    props.close(false);
    // setIsModalVisible(false);
    console.log('ok');
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
