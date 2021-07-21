import React, { useState, useEffect } from 'react';
import Logo from './img/logoo.png';
import profil from './img/profil.png';
import Register from '../modal/Register';
import Registertwo from '../modal/RegisterTwo';
import axios from 'axios';
import ModalLogin from '../ModalLogin/ModalLogin';
import Modification from '../modalModification/Modification';
import ModificationTwo from '../modalModification/ModificationTwo';
import './header.css';

export default function header() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [openModalModif, setOpenModalModif] = useState(false);
  const [openModalModifTwo, setOpenModalModifTwo] = useState(false);
  const [infoModal1, setInfoModal1] = useState();
  const [infoModal2, setInfoModal2] = useState();
  const [openLogin, setOpenLogin] = useState(false);

  const object3 = { ...infoModal1, ...infoModal2 };

  useEffect(() => {
    if (infoModal1 && infoModal2) {
      axios.post('http://localhost:5006/users/', object3);
    }
  }, [object3]);

  return (
    <>
      <div className="header">
        <div className="logo-box">
          <img className="logo-header" src={Logo} alt="logo" />
        </div>
        <div className="connection-zone">
          <div className="profil-box">
            <div className="profil-connected" role="button" tabIndex={0} onClick={() => setOpenModalModif(true)}>
              <img className="profil-picture" src={profil} alt="David-Chazoule" />
              <p className="profil-name">David Chazoule</p>
            </div>
            <button className="disconnection">Déconnection</button>
          </div>

          <div className="button-box">
            <button className="headerBtn" onClick={() => setOpenModal(true)}>
              Inscription
            </button>
            <button className="headerBtn" onClick={() => setOpenLogin(true)}>
              Connexion
            </button>
          </div>
        </div>
      </div>
      <Register
        info={(value) => {
          setInfoModal1(value);
        }}
        openModal={openModal}
        close={(value) => setOpenModal(value)}
        next={(value) => setOpenModalTwo(value)}
      />
      <Registertwo
        openModalTwo={openModalTwo}
        openTwo={(value) => setOpenModalTwo(value)}
        close={(value) => setOpenModalTwo(value)}
        info2={(value) => {
          setInfoModal2(value);
        }}
      />
      <ModalLogin openLogin={openLogin} close={(value) => setOpenLogin(value)} />

      <Modification
        info={(value) => {
          setInfoModal1(value);
        }}
        openModal={openModalModif}
        close={(value) => setOpenModalModif(value)}
        next={(value) => setOpenModalModifTwo(value)}
      />

      <ModificationTwo
        openModalTwo={openModalModifTwo}
        openModal={(value) => setOpenModalModifTwo(value)}
        close={(value) => setOpenModalModifTwo(value)}
        info2={(value) => {
          setInfoModal2(value);
        }}
      />
    </>
  );
}
