import React, { useState } from 'react';
import { Modal } from 'antd';
import { Input } from 'antd';

import { UserOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

function Registertwo(props) {
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [jobDetail, setJobDetail] = useState('');
  const [company, setCompany] = useState('');
  const [bio, setBio] = useState('');

  const { TextArea } = Input;

  const infoTwo = {
    phone,
    linkedin,
    jobDetail,
    company,
    bio,
  };

  const handleOk = () => {
    props.close(false);
    props.info2(infoTwo);
  };

  const handleCancel = () => {
    props.close(false);
  };

  return (
    <>
      <Modal title="Inscription" visible={props.openModalTwo} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} prefix={<PhoneOutlined />} />
        <Input placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} prefix={<LinkedinOutlined />} />
        <Input placeholder="Metier" value={jobDetail} onChange={(e) => setJobDetail(e.target.value)} prefix={<UserOutlined />} />
        <Input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} prefix={<UserOutlined />} />

        <TextArea rows={4} placeholder="présente-toi" value={bio} onChange={(e) => setBio(e.target.value)} />
      </Modal>
    </>
  );
}

export default Registertwo;
