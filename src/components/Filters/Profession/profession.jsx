import React from 'react';
import professionList from './professionList';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './profession.css';

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
      <Select mode="multiple" style={{ width: '60%' }} placeholder="Sélectionner votre profession" options={options} onChange={handleChange} />
    </div>
  );
}

export default Proannee;
