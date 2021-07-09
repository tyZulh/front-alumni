import React from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';

import { UserOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

function Registertwo(props) {
  const handleOk = () => {
    console.log('je suis la');
    props.close(false);
  };


  const handleCancel = () => {
    props.close(false);
  };
  

  return (
    <>
      <Modal title="Inscription" visible={props.openModalTwo} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Téléphone" prefix={<PhoneOutlined />} />
        <Input placeholder="Linkedin" prefix={<LinkedinOutlined />} />
        <Input placeholder="Metier" prefix={<UserOutlined />} />
        <Input placeholder="Entreprise" prefix={<UserOutlined />} />

        <Input placeholder="Présente-toi" />
      </Modal>
    </>
  );
}

export default Registertwo;
