import React, { useState } from 'react';
import Avatar from '../UploadAvatar/UploadAvatar';
import Cv from '../UploadCv/UploadCv';
import { Modal } from 'antd';
import { Input } from 'antd';

import { UserOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

function Registertwo(props) {
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [introduce, setIntroduce] = useState('');

  const { TextArea } = Input;

  const infoTwo = {
    phone,
    linkedin,
    job,
    company,
    introduce,
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
        <Avatar />
        <Input placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} prefix={<PhoneOutlined />} />
        <Input placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} prefix={<LinkedinOutlined />} />
        <Input placeholder="Metier" value={job} onChange={(e) => setJob(e.target.value)} prefix={<UserOutlined />} />
        <Input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} prefix={<UserOutlined />} />
        <Cv />
        <TextArea rows={4} placeholder="présente-toi" value={introduce} onChange={(e) => setIntroduce(e.target.value)} />
      </Modal>
    </>
  );
}

export default Registertwo;
