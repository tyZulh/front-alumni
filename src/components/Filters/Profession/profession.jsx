import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';
import './profession.css';

function Proannee(props) {
  const [jobData, setJobData] = useState([]);
  useEffect(async () => {
    const data = await axios.get('http://localhost:5006/users/job');
    const x = data.data.map((elem, i) => {
      return { value: elem.job, disabled: i === 10 };
    });
    setJobData(x);
  }, []);

  return (
    <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {jobData && (
        <Select
          className="profession"
          style={{ width: '80%', margin: 'auto' }}
          mode="multiple"
          value={props.job}
          placeholder="Sélectionner votre profession"
          options={jobData}
          onChange={(e) => props.handleJob(e)}
        />
      )}
    </div>
  );
}

export default Proannee;
