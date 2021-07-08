import React, { useState, useEffect } from 'react';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';

import Profession from '../Filters/Profession/profession';
import data from '../data';
import './container.css';

export default function ContainerBlock() {
  const [userRecherche, setUserRecherche] = useState([]);
  const [filterArray, setFilterArray] = useState(data);

  const [prof, setProf] = useState([]);
  const [years, setYears] = useState();

  useEffect(() => {
    if (prof.length > 0) {
      filterProf();
      console.log(years);
    } else if (prof.length === 0) {
      setFilterArray(data);
    }
  }, [prof]);

  const filterProf = () => {
    let result = [];
    prof.forEach((elem) => {
      const tempResult = data.filter((item) => item.profession.includes(elem));
      result = [...result, ...tempResult];
    });
    return setFilterArray(result);
  };

  const resultat = () => {
    return filterArray.filter((users) => users.prenom.toLowerCase().includes(userRecherche) || users.nom.toLowerCase().includes(userRecherche));
  };
  console.log('result', resultat());

  return (
    <div id="big-container-block">
      <div id="small-container-block">
        <Recherche recupSearchValue={(value) => setUserRecherche(value)} />

        <Profession professionArray={(value) => setProf(value)} />

        <div id="container-filtre">
          <ListUsers valueUser={resultat()} />
        </div>
      </div>
    </div>
  );
}
