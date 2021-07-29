import React from 'react';
import { Input, Space } from 'antd';
import './recherche.css';

const { Search } = Input;

export default function Recherche(props) {
  return (
    <div className="box-search">
      <Space style={{ width: '60%', margin: 'auto' }} direction="vertical">
        <Search
          placeholder="Rechercher..."
          allowClear
          enterButton
          size="medium"
          value={props.userResearch}
          onChange={(e) => {
            props.handleResearch(e.target.value);
          }}
        />
      </Space>
    </div>
  );
}
