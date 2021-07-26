import React, { useState } from 'react';
import { Modal } from 'antd';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './ModalUser.css';
import email from '../img/mail.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';
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
                {props.userId.firstname} <span className="name">{props.userId.lastname}</span>
              </h1>
              <div className="line"></div>
              <p className="profession">{props.userId.job}</p>
              <p className="detail-job">{props.userId.jobDetail}</p>
              <p className="detail-job">{props.userId.company}</p>
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
                <button className="btn-download">Télécharger mon CV</button>
              </a>
              <div className="line"></div>
              <h3 className="contact-title">CONTACT</h3>
            </div>
            <div className="contact-container">
              <a href={props.userId.linkedin}>
                <img className="logo" src={linkedin} alt="Linkedin" />
              </a>
              <div className="mail-box">
                <img className="logo" src={email} alt="mail" onClick={handleEmail} />
                {showEmail && (
                  <>
                    <p className="email">{props.userId.email}</p>
                  </>
                )}
              </div>
              <div className="mail-box">
                <img className="logo" src={phone} alt="téléphone" onClick={handlePhone} />

                {showPhone && (
                  <>
                    <p className="phone">{props.userId.phone}</p>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalUser;
