import React, { useState, useEffect } from 'react';
import Logo from './img/logoo.png';
import Register from '../modal/Register';
import Registertwo from '../modal/RegisterTwo';
import axios from 'axios';
import ModalLogin from '../ModalLogin/ModalLogin';
import Modification from '../modalModification/Modification';
import ModificationTwo from '../modalModification/ModificationTwo';
import './header.css';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import jwt_decode from 'jwt-decode';

export default function header() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [openModalModif, setOpenModalModif] = useState(false);
  const [openModalModifTwo, setOpenModalModifTwo] = useState(false);
  const [infoModal1, setInfoModal1] = useState();
  const [infoModal2, setInfoModal2] = useState();
  const [openLogin, setOpenLogin] = useState(false);
  const [picture, setPicture] = useState();
  const [cv, setCv] = useState();

  const object3 = { ...infoModal1, ...infoModal2 };

  const [users, setUsers] = useState([]);

  function ClearLocal() {
    window.localStorage.clear();
    document.location.reload();
  }

  useEffect(async () => {
    const token = localStorage.getItem('token');
    const userId = jwt_decode(token).userInfo.userId;
    if (userId) {
      const result = await axios.get(`http://localhost:5006/users/id/${userId}`);
      setUsers(result.data);
      return result;
    }
  }, []);

  useEffect(() => {
    if (infoModal1 && infoModal2) {
      const postData = async () => {
        const user = await axios.post('http://localhost:5006/users/', object3);

        if (picture.get('picture').name.length > 1) {
          const options = {
            method: 'POST',
            url: `http://localhost:5006/users/${user.data.student_id}/picture`,
            data: picture,
            headers: { 'Content-Type': 'multipart/form-data' },
          };
          await axios(options);
        }
        if (cv.get('cv').name.length > 1) {
          const optionsCv = {
            method: 'POST',
            url: `http://localhost:5006/users/${user.data.student_id}/cv`,
            data: cv,
            headers: { 'Content-Type': 'multipart/form-data' },
          };
          await axios(optionsCv);
        }
      };
      postData();
    }
  }, [infoModal2, infoModal1]);

  return (
    <>
      <div className="header">
        <div className="logo-box">
          <a src="https://assocollegededroitassas.fr/">
            <img className="logo-header" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="connection-zone">
          {users[0] && (
            <div className="profil-box">
              {users.map((user) => {
                return (
                  <div key={user.email}>
                    <div className="profil-connected" role="button" tabIndex={0} onClick={() => setOpenModalModif(true)}>
                      <ListItemAvatar>
                        <Avatar alt="image" src={user.picture ? `data:image/jpeg;base64, ${user.picture}` : null} />
                      </ListItemAvatar>
                      <div className="profil-name">
                        {user.firstname}
                        {user.lastname}
                      </div>
                    </div>
                  </div>
                );
              })}
              <button className="disconnection" onClick={ClearLocal}>
                Déconnexion
              </button>
            </div>
          )}

          {!users[0] && (
            <div className="button-box">
              <button className="headerBtn" onClick={() => setOpenModal(true)}>
                Inscription
              </button>
              <button className="headerBtn" onClick={() => setOpenLogin(true)}>
                Connexion
              </button>
            </div>
          )}
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
        picture={(value) => setPicture(value)}
        cv={(value) => setCv(value)}
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
