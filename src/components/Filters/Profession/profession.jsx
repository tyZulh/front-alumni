import React, { useEffect, useState } from 'react';

import { Select } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';

function Proannee(props) {
  const [jobData, setJobData] = useState([]);
  useEffect(async () => {
    const data = await axios.get('http://localhost:5006/users/job');
    const x = data.data.map((elem, i) => {
      return { value: elem.job, disabled: i === 10 };
    });
    setJobData(x);
  }, []);

  const handleChange = (value) => {
    props.professionArray(value);
  };
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      {jobData && (
        <Select
          style={{ width: '100%', margin: 'auto' }}
          mode="multiple"
          placeholder="Sélectionner votre profession"
          options={jobData}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Proannee;
