import React, { useState } from 'react';
import { Modal } from 'antd';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './ModalUser.css';
import email from '../img/mail.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

function ModalUser(props) {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

  const classes = useStyles();

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

  const validateProfil = async (id) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/users/validate/${id}`);
    props.cancelModal(false);
    props.update(id);
  };

  const deleteProfil = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);
    props.cancelModal(false);
    props.supp(id);
  };
  function UpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
                <Avatar className={classes.large} alt="image" src={props.userId.picture ? `data:image/jpeg;base64, ${props.userId.picture}` : null} />
              </ListItemAvatar>
              <h1 className="name-user">
                {UpperCase(props.userId.firstname)} <span className="name">{UpperCase(props.userId.lastname)}</span>
              </h1>
              <div className="line"></div>
              <p className="profession">{props.userId.job}</p>
              <p className="detail-job">{props.userId.jobDetail}</p>
              <p className="detail-job">{UpperCase(props.userId.company)}</p>
              <p>{UpperCase(props.userId.master_degree)}</p>

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
              <p className="bio">{UpperCase(props.userId.bio)}</p>
              {props.userId.cv && (
                <a href={`data:application/pdf;base64, ${props.userId.cv}`} download={`CV-${props.userId.firstname}-${props.userId.lastname}`}>
                  <button className="btn-download">Télécharger mon CV</button>
                </a>
              )}
              <div className="line"></div>
              <h3 className="contact-title">CONTACT</h3>
            </div>
            <div className="contact-container">
              <a href={props.userId.linkedin} target="_blank" rel="noreferrer">
                <img className="logo" src={linkedin} alt="Linkedin" title="Linkedin" />
              </a>
              <div className="mail-box">
                <img className="logo" src={email} alt="mail" title="Email" onClick={handleEmail} />
                {showEmail && (
                  <>
                    <p className="email">{props.userId.email}</p>
                  </>
                )}
              </div>
              <div className="mail-box">
                <img className="logo" src={phone} alt="téléphone" title="Téléphone" onClick={handlePhone} />

                {showPhone && (
                  <>
                    <p className="phone">{props.userId.phone}</p>
                  </>
                )}
              </div>
            </div>
            {props.userId.validate === 0 && (
              <div className="box-btn-val">
                <button className="cancel" title="Refuser" onClick={() => deleteProfil(props.userId.student_id)}>
                  Refuser
                </button>
                <button className="validate" title="Valider" onClick={() => validateProfil(props.userId.student_id)}>
                  Valider
                </button>
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalUser;
