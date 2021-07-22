import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const item = localStorage.getItem('email');
  useEffect(async () => {
    const result = await axios.get('http://localhost:5006/users/' + item, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
      },
    });
    setUsers(result.data);
  }, []);
  return (
    <div>
      <h1>hello user</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.firstname} {user.lastname} {user.picture}
          </div>
        );
      })}
    </div>
  );
}
