import React from 'react';
import { DatePicker, Space } from 'antd';

export default function Anneeyears(props) {
  const onChange = (date, dateString) => {
    props.years(dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  );
}
