import React, { useRef, useState } from 'react';
import { Input, Checkbox, Modal, Button, notification } from 'antd';
import { UserOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

import './RegisterTwo.css';

function Registertwo(props) {
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [masterDegree, setMasterDegree] = useState('');
  const [bio, setBio] = useState('');
  const [privateInfo, setPrivateInfo] = useState(0);
  const [sourcePicture, setSourcePicture] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const refPicture = useRef();
  const refCv = useRef();

  const { TextArea } = Input;

  const infoTwo = {
    phone,
    linkedin,
    job,
    company,
    bio,
    masterDegree,
    privateInfo,
  };
  const key = 'updatable';

  const openNotification = () => {
    notification.open({
      key,
      message: 'Inscription terminé',
      description: 'En attente de validation par un administrateur',
    });
    setTimeout(() => {
      notification.open({
        key,
        message: 'Inscription terminé',
        description: 'En attente de validation par un administrateur',
      });
    }, 1000);
  };

  const handleOk = () => {
    props.close(false);
    props.info2(infoTwo);
    const picture = new FormData(refPicture.current);
    props.picture(picture);
    const cv = new FormData(refCv.current);
    props.cv(cv);
    openNotification();
    setPhone('');
    setLinkedin('');
    setJob('');
    setCompany('');
    setMasterDegree('');
    setBio('');
    setPrivateInfo(0);
    setSourcePicture(null);
  };

  const handleCancel = () => {
    props.close(false);
  };

  const onChange = () => {
    if (privateInfo === 0) {
      setPrivateInfo(1);
    } else {
      setPrivateInfo(0);
    }
  };

  const loadFile = (e) => {
    setSourcePicture(URL.createObjectURL(e.target.files[0]));
  };

  const changeHandler = () => {
    setIsSelected(true);
  };


  const handleOk2 = () => {
    setIsModalVisible(false);
    document.location.reload();
  };

  return (
    <>
      <Modal title="Inscription" visible={props.openModalTwo} onOk={handleOk} onCancel={handleCancel}>
        <div className="modal-two">
          <label htmlFor="files" id="lab-picture" style={{ backgroundImage: `url(${sourcePicture})` }}>
            {sourcePicture ? null : (
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <span id="picture-span">+</span>Votre photo
              </p>
            )}
          </label>
          <form ref={refPicture}>
            <input
              className="button-cv"
              id="files"
              style={{ visibility: 'hidden' }}
              name="picture"
              type="file"
              onChange={(e) => loadFile(e)}
              encType="multipart/form-data"
              accept="image/png, image/jpeg"
            />
          </form>
        </div>
        <Input className="input-Two" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} prefix={<PhoneOutlined />} />
        <Input
          className="input-Two"
          placeholder="Linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          prefix={<LinkedinOutlined />}
        />
        <Input
          className="input-Two"
          placeholder="Intitulé exact de votre poste actuel"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          prefix={<UserOutlined />}
        />
        <Input
          className="input-Two"
          placeholder="Entreprise"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          prefix={<UserOutlined />}
        />
        <Input
          className="input-Two"
          placeholder="Intitulé de votre diplôme de Master"
          value={masterDegree}
          onChange={(e) => setMasterDegree(e.target.value)}
          prefix={<UserOutlined />}
        />

        <form ref={refCv}>
          <div style={{ display: 'flex', backgroundColor: 'white' }}>
            <input type="file" name="cv" encType="multipart/form-data" onChange={changeHandler} style={{ backgroundColor: 'white' }} />
          </div>
        </form>
        <TextArea
          className="description-box"
          rows={4}
          placeholder="Présentez en quelques mots vos parcours universitaire et professionnel"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Checkbox onChange={onChange}>Privé*</Checkbox>
        <p className="private">*En mode privé, votre profil ne pourra être consulté que par les anciens diplômés inscrits dans l’annuaire.</p>
      </Modal>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk2}>
        <p>
          Votre inscription dans l’annuaire a bien été prise en compte. <br /> – Votre profil est en cours de validation et sera accessible
          prochainement.
        </p>
      </Modal>

    </>
  );
}

export default Registertwo;
