import React, { useState, useEffect } from 'react';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';
import Profession from '../Filters/Profession/profession';
import School from '../Filters/School/school';
import Anneeyears from '../Filters/Annee/annee';
import data from '../data';
import './container.css';

export default function ContainerBlock() {
  const [filterArray, setFilterArray] = useState([]);
  const [userRecherche, setUserRecherche] = useState([]);
  const [job, setjob] = useState([]);
  const [years, setYears] = useState();
  const [school, setSchool] = useState([]);

  useEffect(() => {
    setFilterArray(data);
  }, []);

  useEffect(() => {
    if (job.length > 0) {
      filterJob(data);
    } else if (job.length === 0) {
      setFilterArray(data);
    }
  }, [job]);

  useEffect(() => {
    if (school.length > 0) {
      filterSchool(data);
    } else if (job.length === 0) {
      setFilterArray(data);
    }
  }, [school]);

  const filterSchool = (b = filterArray) => {
    let resultSchool = [];
    if (b) {
      school.forEach((elem) => {
        const tempResultSchool = b.filter((item) => item.promo.includes(elem));
        resultSchool = [...resultSchool, ...tempResultSchool];
      });
      return setFilterArray(resultSchool);
    }
  };

  const filterJob = (b = filterArray) => {
    let result = [];
    if (b) {
      job.forEach((elem) => {
        const tempResult = b.filter((item) => item.profession.includes(elem));
        result = [...result, ...tempResult];
      });
      return setFilterArray(result);
    }
  };

  const resultat = () => {
    if (years) {
      return filterArray
        .filter((users) => users.prenom.toLowerCase().includes(userRecherche) || users.nom.toLowerCase().includes(userRecherche))
        .filter((an) => an.annee == years);
    } else {
      return filterArray.filter((users) => users.prenom.toLowerCase().includes(userRecherche) || users.nom.toLowerCase().includes(userRecherche));
    }
  };

  return (
    <div id="big-container-block">
      <div id="small-container-block">
        <Recherche recupSearchValue={(value) => setUserRecherche(value)} />
        <Profession professionArray={(value) => setjob(value)} />
        <div id="filter-div">
          <div id="filter-div2">
            <School schoolArray={(value) => setSchool(value)} />
            <Anneeyears years={(value) => setYears(value)} />
          </div>
        </div>
        <ListUsers valueUser={resultat()} />
      </div>
    </div>
  );
}
