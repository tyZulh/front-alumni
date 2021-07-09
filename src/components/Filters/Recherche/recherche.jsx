import React from 'react';
import { Input, Space } from 'antd';
import './recherche.css';

const { Search } = Input;
export default function Recherche(props) {
  const [value, setValue] = React.useState('');
  return (
    <div id="container-search">
      <Space style={{ width: '60%' }} direction="vertical">
        <Search
          placeholder="Rechercher..."
          allowClear
          enterButton
          size="medium"
          value={value}
          onChange={(e) => {
            props.recupSearchValue(e.target.value.toLowerCase());
            setValue(e.target.value);
          }}
        />
      </Space>
    </div>
  );
}
