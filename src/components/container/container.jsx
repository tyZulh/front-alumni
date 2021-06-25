import React, { useState } from 'react';
import Recherche from '../Filters/Recherche/recherche';
import ListUsers from '../list/listusers';
import data from '../data';
import './container.css';

export default function ContainerBlock() {
  const [userRecherche, setUserRecherche] = useState([]);

  const resultat = () => {
    return data.filter((users) => users.prenom.toLowerCase().includes(userRecherche) || users.nom.toLowerCase().includes(userRecherche));
  };

  return (
    <div id="big-container-block">
      <div id="small-container-block">
        <Recherche recupSearchValue={(value) => setUserRecherche(value)} />
        <div id="container-filtre">
          <ListUsers valueUser={resultat()} />
        </div>
      </div>
    </div>
  );
}
