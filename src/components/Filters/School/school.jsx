import React from 'react';
import { Select } from 'antd';
const schoolList = ['college de droit', 'ecole de droit'];

export default function School(props) {
  const options = [];

  for (let i = 0; i < schoolList.length; i++) {
    const value = `${schoolList[i].toString(36)}`;
    options.push({
      value,
      disabled: i === 10,
    });
  }
  const handleChange = (value) => {
    props.schoolArray(value);
  };
  return (
    <div className="pro-annee-container" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Select mode="multiple" style={{ width: '100%' }} placeholder="Sélectionner votre école" options={options} onChange={handleChange} />
    </div>
  );
}
