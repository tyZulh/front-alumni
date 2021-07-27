import React from 'react';
import { DatePicker, Space } from 'antd';
import './annee.css';

export default function Anneeyears(props) {
  const onChange = (date, dateString) => {
    props.years(dateString);
  };

  return (
    <div className="date-picker" style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
      <Space direction="vertical" style={{ width: '80%' }}>
        <DatePicker style={{ width: '100%' }} onChange={onChange} picker="year" placeholder="Année" />
      </Space>
    </div>
  );
}
