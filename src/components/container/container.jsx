import React, { useState, useEffect } from 'react';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';

import Profession from '../Filters/Profession/profession';
import School from '../Filters/School/school';
import Anneeyears from '../Filters/Annee/annee';
import './container.css';
import axios from 'axios';

export default function ContainerBlock() {
  useEffect(async () => {
    const myData = await axios.get('http://localhost:5006/users/');
    console.log(myData.data[0]);
    setdataUsersUsers(myData.data);
    setFilterArray(myData.data);
  }, []);
  const [dataUsers, setdataUsersUsers] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [userRecherche, setUserRecherche] = useState([]);
  const [job, setjob] = useState([]);
  const [years, setYears] = useState();
  const [school, setSchool] = useState([]);

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

  const filterSchool = (b = filterArray) => {
    let resultSchool = [];
    school.forEach((elem) => {
      const tempResult = b.filter((item) => {
        if (item.schools.some((school) => school.title === elem)) {
          return item;
        }
      });
      resultSchool = [...resultSchool, ...tempResult];
    });
    return resultSchool;
  };

  const filterJob = (b = filterArray) => {
    let result = [];
    job.forEach((elem) => {
      const tempResult = b.filter((item) => item.job.includes(elem));
      result = [...result, ...tempResult];
    });
    return result;
  };

  const resultat = () => {
    console.log('years', years);
    if (years) {
      return filterArray
        .filter((users) => users.firstname.toLowerCase().includes(userRecherche) || users.lastname.toLowerCase().includes(userRecherche))
        .filter((an) => an.schools.some((year) => year.year_of_promotion == years));
    } else {
      return filterArray.filter(
        (users) => users.firstname.toLowerCase().includes(userRecherche) || users.lastname.toLowerCase().includes(userRecherche),
      );
    }
  };

  return (
    <div id="big-container-block">
      <div id="small-container-block">
        <Recherche recupSearchValue={(value) => setUserRecherche(value)} />
        <div id="filter-div2">
          <Profession professionArray={(value) => setjob(value)} />
          <School schoolArray={(value) => setSchool(value)} />
          <Anneeyears years={(value) => setYears(value)} />
        </div>
        <div id="container-filtre">
          <ListUsers valueUser={resultat()} />
        </div>
      </div>
    </div>
  );
}
