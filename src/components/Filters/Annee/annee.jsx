import React from 'react';
import { DatePicker, Space } from 'antd';

export default function Anneeyears(props) {
  const onChange = (date, dateString) => {
    props.years(dateString);
  };

  return (
    <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
    <Space direction="vertical" style={{ width: '80%' }}>
      <DatePicker style={{ width: '100%' }} onChange={onChange} picker="year" placeholder="Année" />
    </Space>
    </div>
  );
}
