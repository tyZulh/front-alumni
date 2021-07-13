import React, { useState } from 'react';
import Header from './navbar';

import axios from 'axios';

function Register() {
  const [firstname, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setlastName] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:5006/users', { email, password, firstname, lastname, job, phone });
    console.log(result);
  };
  return (
    <div className="Login h-64 bg-gray-300 p-10 flex flex-col">
      <Header />
      <h1>REGISTER</h1>
      <form className="flex flex-col justify-evenly h-full" onSubmit={(e) => handlePost(e)}>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" value={firstname} placeholder="first name" onChange={(e) => setfirstName(e.target.value)} />
        <input type="text" value={lastname} placeholder="last name" onChange={(e) => setlastName(e.target.value)} />
        <input type="text" value={phone} placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
        <input type="text" value={job} placeholder="job" onChange={(e) => setJob(e.target.value)} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Register;
