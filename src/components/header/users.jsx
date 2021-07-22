import React, { useEffect, useState, useHistory } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const item = localStorage.getItem('email');
  useEffect(async () => {
    try {
      const result = await axios.get('http://localhost:5006/users/' + item, {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('token'),
        },
      });
      setUsers(result.data);
    } catch (err) {
      history.push('/');
    }
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
