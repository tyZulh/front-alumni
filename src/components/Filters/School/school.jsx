import React from 'react';
import { Select } from 'antd';
const schoolList = ['Collège de droit', 'Ecole de droit'];

import './School.css';

export default function School(props) {
  const options = [];

  for (let i = 0; i < schoolList.length; i++) {
    const value = `${schoolList[i].toString(36)}`;
    options.push({
      value,
      disabled: i === 10,
    });
  }
  return (
    <div className="pro-annee-container" style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
      <Select
        mode="multiple"
        style={{ width: '80%' }}
        placeholder="Sélectionner votre école"
        options={options}
        value={props.school}
        onChange={(e) => props.handleSchool(e)}
      />
    </div>
  );
}
