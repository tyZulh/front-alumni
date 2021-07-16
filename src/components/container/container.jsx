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
    console.log(myData.data);
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
      const tempResultSchool = b.filter((item) => item.promo.includes(elem));
      resultSchool = [...resultSchool, ...tempResultSchool];
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
    if (years) {
      return filterArray
        .filter((users) => users.firstname.toLowerCase().includes(userRecherche) || users.lastname.toLowerCase().includes(userRecherche))
        .filter((an) => an.annee == years);
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

        <Profession professionArray={(value) => setjob(value)} />
        <School schoolArray={(value) => setSchool(value)} />
        <Anneeyears years={(value) => setYears(value)} />
        <div id="filter-div">
          <div id="filter-div2"></div>

          <div id="container-filtre">
            <ListUsers valueUser={resultat()} />
          </div>
        </div>
      </div>
    </div>
  );
}
