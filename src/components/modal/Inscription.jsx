import React from 'react';
import { Modal } from 'antd';

function Inscription(props) {
  const handleOk = () => {
    props.close(false);
  };
  // envoyer false a header

  const handleCancel = () => {
    props.close(false);
  };
  // envoyer false a header

  return (
    <>
      <Modal title="Basic Modal" visible={props.openModal} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default Inscription;
