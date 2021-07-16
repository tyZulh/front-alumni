import React from 'react';
import { DatePicker, Space } from 'antd';

export default function Anneeyears(props) {
  const onChange = (date, dateString) => {
    props.years(dateString);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <DatePicker style={{ width: '100%' }} onChange={onChange} picker="year" />
    </Space>
  );
}
