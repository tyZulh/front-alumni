import React, { useState } from 'react';
import { Modal } from 'antd';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
  console.log(props);
  return (
    <>
      <Modal
        visible={props.modal}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}>
        {props.userId && (
          <>
            <div className="container-user">
              <ListItemAvatar>
                <Avatar alt="image" src={props.userId.picture ? `data:image/jpeg;base64, ${props.userId.picture}` : null} />
              </ListItemAvatar>
              <h1 className="name-user">
                {props.userId.firstname} {props.userId.lastname}
              </h1>
              <p className="detail">{props.userId.job}</p>
              <p className="detail">{props.userId.jobDetail}</p>
              <p className="detail">{props.userId.company}</p>
              <p>{props.userId.master_degree}</p>

              <p className="detail">
                <span className="school"> {props.userId.schools[0].title}</span> -{' '}
                <span className="year">{props.userId.schools[0].year_of_promotion}</span>
              </p>
              {props.userId.schools.length > 1 ? (
                <>
                  <p className="detail">
                    <span className="school"> {props.userId.schools[1].title}</span> -{' '}
                    <span className="year">{props.userId.schools[1].year_of_promotion}</span>
                  </p>
                </>
              ) : null}
              <p className="bio">{props.userId.bio}</p>

              <a href={`data:application/pdf;base64, ${props.userId.cv}`} download={`CV-${props.userId.firstname}-${props.userId.lastname}`}>
                <button>Télécharger mon CV</button>
              </a>
              <h3 className="contact-title">CONTACT</h3>
            </div>
            <div className="contact-container">
              <a href={props.userId.linkedin}>
                <img className="logo" src={linkedin} alt="Linkedin" />
              </a>
              <a href={props.userId.email}>
                <img className="logo" src={email} alt="mail" />
              </a>
              <img className="logo" src={phone} alt="téléphone" onClick={handlePhone} />
            </div>
            <div className="phone-box">
              {showPhone && (
                <>
                  <p className="phone">{props.userId.phone}</p>
                </>
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalUser;
