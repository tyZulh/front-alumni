import React, { useState, useEffect } from 'react';
import './container.css';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';
import Profession from '../Filters/Profession/profession';
import Anneeyears from '../Filters/Annee/annee';
import Diplome from '../Filters/Diplome/diplome';
import data from '../data';

export default function ContainerBlock() {
  const [filterArray, setFilterArray] = useState(data);
  const [userRecherche, setUserRecherche] = useState([]);
  const [prof, setProf] = useState([]);
  const [years, setYears] = useState();
  const [ecole, setEcole] = useState([]);

  useEffect(() => {
    if (ecole.length > 0 && prof.length > 0) {
      console.log('ecole.length > 0 && prof.length > 0');
      filterTest();
      filterSchool();
    } else if (ecole.length > 0) {
      console.log('ecole.length > 0');
      filterSchool();
    } else if (prof.length !== 0) {
      console.log('prof.length !== 0');
      filterTest();
    } else if (prof.length === 0) {
      console.log('prof.length === 0');
      setFilterArray(data);
      console.log('ecole.length === 0');
    } else if (ecole.length === 0) {
      console.log('ecole.length === 0');
      setEcole(data);
    }
  }, [prof, ecole]);

  const filterTest = () => {
    let result = [];
    prof.forEach((elem) => {
      const tempResult = filterArray.filter((item) => item.profession.includes(elem));
      result = [...result, ...tempResult];
    });
    return setFilterArray(result);
  };

  const filterSchool = () => {
    let resultSchool = [];
    console.log(ecole);
    ecole.forEach((elem) => {
      const tempResults = filterArray.filter((item) => item.promo.includes(elem));
      resultSchool = [...resultSchool, ...tempResults];
    });
    console.log(resultSchool);
    return setFilterArray(resultSchool);
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
        <Diplome diplome={(value) => setEcole(value)} />
        <Recherche recupSearchValue={(value) => setUserRecherche(value)} /> {/* enfant to parent*/}
        <Profession professionArray={(value) => setProf(value)} /> {/* enfant to parent*/}
        <Anneeyears years={(value) => setYears(value)} />
        <div id="container-filtre">
          <ListUsers valueUser={resultat()} />
        </div>
      </div>
    </div>
  );
}
