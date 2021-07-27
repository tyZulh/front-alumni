import React, { useRef, useState } from 'react';
import { Input, Checkbox, Modal } from 'antd';
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
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleOk = () => {
    props.close(false);
    props.info2(infoTwo);
    const picture = new FormData(refPicture.current);
    props.picture(picture);
    const cv = new FormData(refCv.current);
    props.cv(cv);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk2 = () => {
    setIsModalVisible(false);
    document.location.reload();
  };

  return (
    <>
      <Modal title="Inscription" visible={props.openModalTwo} onOk={(handleOk, showModal)} onCancel={handleCancel}>
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
          rows={4}
          placeholder="Présentez en quelques mots vos parcours universitaire et professionnel"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Checkbox onChange={onChange}>Privé</Checkbox>
      </Modal>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk2}>
        <p>Inscription effectué</p>
        <p>Veuillez attendre qu&apos;un administrateur valide votre inscription</p>
        <p>Vous recevrez un Email sous peu</p>
      </Modal>
    </>
  );
}

export default Registertwo;
