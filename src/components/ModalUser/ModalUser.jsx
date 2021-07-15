import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import user from '../users';
import './ModalUser.css';
import email from '../img/email.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';

function ModalUser(props) {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhone = () => {
    setShowPhone(!showPhone);
  };

  const handleCancel = () => {
    props.cancelModal(false);
  };

  return (
    <>
      <Modal
        visible={props.modal}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}>
        <div className="container-user">
          <img className="picture" src={user.photo} alt={user.prenom} />
          <h1 className="name-user">
            {user.prenom} {user.nom}
          </h1>
          <p className="detail">{user.profession}</p>
          <p className="detail">{user.metier}</p>
          <p className="detail">{user.entreprise}</p>
          <p className="detail">
            <span className="school"> {user.etude1}</span> - <span className="year">{user.annee1}</span>
          </p>
          <p className="detail">
            <span className="school"> {user.etude2}</span> - <span className="year">{user.annee2}</span>
          </p>
          <p className="bio">{user.bio}</p>
          <Button className="contact" type="primary" shape="round" size="medium">
            Consulter CV
          </Button>
          <h3 className="contact-title">CONTACT</h3>
        </div>
        <div className="contact-container">
          <a href={user.linkedin}>
            <img className="logo" src={linkedin} alt="Linkedin" />
          </a>
          <a href={user.email}>
            <img className="logo" src={email} alt="mail" />
          </a>
          <img className="logo" src={phone} alt="téléphone" onClick={handlePhone} />
        </div>
        <div className="phone-box">
          {showPhone && (
            <>
              <p className="phone">{user.telephone}</p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalUser;
