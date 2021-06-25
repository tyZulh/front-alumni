import React from 'react';
import './recherche.css';
import { Input, Space } from 'antd';

const { Search } = Input;
export default function Recherche(props) {
  const [value, setValue] = React.useState('');
  return (
    <div id="container-search">
      <Space id="test" direction="vertical">
        <Search
          placeholder="Rechercher..."
          allowClear
          enterButton
          size="small"
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
