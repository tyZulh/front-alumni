import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const diplome = ['college de droit', 'ecole de droit'];

const options = [];

for (let i = 0; i < diplome.length; i++) {
  const value = `${diplome[i].toString(36)}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

export default function Diplome(props) {
  const handleChange = (value) => {
    props.diplome(value);
  };
  return (
    <div className="pro-annee-container">
      <Select mode="multiple" style={{ width: '100%' }} placeholder="Diplome" options={options} onChange={handleChange} />
    </div>
  );
}
