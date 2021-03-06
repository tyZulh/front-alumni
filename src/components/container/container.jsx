import React, { useState, useEffect } from 'react';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';
import Profession from '../Filters/Profession/profession';
import School from '../Filters/School/school';
import Anneeyears from '../Filters/Annee/annee';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import moment from 'moment';

import './container.css';

export default function ContainerBlock() {
  const [dataUsers, setdataUsersUsers] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [userRecherche, setUserRecherche] = useState('');
  const [job, setjob] = useState([]);
  const [years, setYears] = useState();
  const [school, setSchool] = useState([]);
  const [waitingUser, setWaitingUser] = useState([]);

  const validateUser = (id) => {
    const user = waitingUser.filter((item) => item.student_id === id);
    user[0].validate = 1;
    setWaitingUser(waitingUser.filter((item) => item.student_id !== id));
    setFilterArray([...dataUsers, ...user]);
  };

  const SuppUser = (id) => {
    const user = dataUsers.filter((item) => item.student_id !== id);
    const waiting = waitingUser.filter((item) => item.student_id !== id);
    setFilterArray(user);
    setWaitingUser(waiting);
  };

  useEffect(async () => {
    let myData;
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.admin === 1) {
        const waiting = await axios.get(`${import.meta.env.VITE_API_URL}/users/`, {
          headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
          },
        });
        setWaitingUser(waiting.data);
      }
      myData = await axios.get(`${import.meta.env.VITE_API_URL}/users/`, {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('token'),
        },
      });
    } else {
      myData = await axios.get(`${import.meta.env.VITE_API_URL}/users/`);
    }
    setdataUsersUsers(myData.data);
    setFilterArray(myData.data);
  }, []);

  useEffect(() => {
    filter();
  }, [school, job]);

  const filter = () => {
    let filteredUsers;
    if (school.length && !job.length) {
      filteredUsers = filterSchool(dataUsers);
    } else if (school.length && job.length) {
      filteredUsers = filterJob(filterSchool(dataUsers));
    } else if (!school.length && job.length) {
      filteredUsers = filterJob(dataUsers);
    } else {
      filteredUsers = dataUsers;
    }
    setFilterArray(filteredUsers);
  };

  const filterJob = (b = filterArray) => {
    let result = [];
    job.forEach((elem) => {
      const tempResult = b.filter((item) => item.job.includes(elem));
      result = [...result, ...tempResult];
    });
    return result;
  };

  const filterSchool = (b = filterArray) => {
    let resultSchool = [];
    school.forEach((elem) => {
      const tempResultSchool = b.filter((item) => item.schools.some((schoolItem) => schoolItem.title === elem));
      resultSchool = [...resultSchool, ...tempResultSchool];
    });
    const arr = [];

    for (let i = 0; resultSchool.length > i; i++) {
      if (!arr.some((item) => item.student_id === resultSchool[i].student_id)) {
        arr.push(resultSchool[i]);
      }
    }
    return arr;
  };

  const resultat = () => {
    if (years) {
      return filterArray
        .filter((users) => users.firstname.toLowerCase().includes(userRecherche) || users.lastname.toLowerCase().includes(userRecherche))
        .filter((an) => an.schools.some((item) => item.year_of_promotion == moment(years._d).format('YYYY')));
    } else {
      return filterArray.filter(
        (users) => users.firstname.toLowerCase().includes(userRecherche) || users.lastname.toLowerCase().includes(userRecherche.toLocaleLowerCase()),
      );
    }
  };
  const handleSearch = (value) => {
    setUserRecherche(value);
  };

  const Reset = () => {
    setUserRecherche('');
    setjob([]);
    setYears();
    setSchool([]);
  };
  return (
    <div id="big-container-block">
      <div id="small-container-block">
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Recherche handleResearch={handleSearch} userResearch={userRecherche} />
            {(job.length > 0 || school.length > 0 || years || userRecherche.length > 0) && (
              <button id="reset" onClick={Reset}>
                X
              </button>
            )}
          </div>
          <div id="filter-div2">
            <Profession handleJob={setjob} job={job} />
            <School handleSchool={setSchool} school={school} />
            <Anneeyears handleYears={setYears} years={years} />
          </div>
        </div>
        <div id="container-filtre">
          <ListUsers update={validateUser} supp={SuppUser} waitingUser={waitingUser} valueUser={resultat()} />
        </div>
      </div>
    </div>
  );
}
