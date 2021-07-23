import React, { useState } from 'react';
import { Modal } from 'antd';
import user from '../users';
import './ModalUser.css';
import mail from '../img/mail.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';

function ModalUser(props) {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handlePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };
  const handleEmail = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
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
            {user.prenom} <span className="name">{user.nom}</span>
          </h1>
          <div className="line"></div>
          <p className="profession">{user.profession}</p>
          <p className="detail-job">{user.metier}</p>
          <p className="detail-job">{user.entreprise}</p>
          <p className="detail">
            <span className="school"> {user.etude1}</span> - <span className="year">{user.annee1}</span>
          </p>
          <p className="detail">
            <span className="school"> {user.etude2}</span> - <span className="year">{user.annee2}</span>
          </p>
          <p className="detail-job">{user.master}</p>
          <p className="bio">{user.bio}</p>
          <button className="contact" type="primary" shape="round" size="medium">
            Consulter CV
          </button>
          <div className="line"></div>
          <h3 className="contact-title">CONTACT</h3>
        </div>
        <div className="contact-container">
          <a href={user.linkedin}>
            <img className="logo" src={linkedin} alt="Linkedin" />
          </a>
          <div className="mail-box">
            <img className="logo" src={mail} alt="mail" onClick={handleEmail} />
            {showEmail && (
              <>
                <p className="email">{user.email}</p>
              </>
            )}
          </div>
          <div className="mail-box">
            <img className="logo" src={phone} alt="téléphone" onClick={handlePhone} />
            {showPhone && (
              <>
                <p className="phone">{user.telephone}</p>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalUser;
