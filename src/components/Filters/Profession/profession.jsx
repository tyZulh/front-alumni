import React from 'react';

import professionList from '../../data/professionList';
import { Select } from 'antd';

import 'antd/dist/antd.css';

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
    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Select
        style={{ width: '100%', margin: 'auto' }}
        mode="multiple"
        placeholder="Sélectionner votre profession"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default Proannee;
