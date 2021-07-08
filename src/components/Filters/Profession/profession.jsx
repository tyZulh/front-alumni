import React from 'react';
import professionList from './professionList';
import { Typography, Select } from 'antd';
import 'antd/dist/antd.css';
import './profession.css';

const { Title } = Typography;

const options = [];

for (let i = 0; i < professionList.length; i++) {
  const value = `${professionList[i].toString(36)}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

function Proannee(props) {
  const handleChange = (value) => {
    props.professionArray(value);
  };
  return (
    <div className="pro-annee-container">
      <Title level={4}>Choisissez votre profession</Title>
      <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select" options={options} onChange={handleChange} />
    </div>
  );
}

export default Proannee;