import React, { useRef, useState } from 'react';
import { Input, Checkbox, Modal } from 'antd';

import { UserOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

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

  return (
    <>
      <Modal title="Inscription" visible={props.openModalTwo} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <label htmlFor="files" id="lab-picture" style={{ backgroundImage: `url(${sourcePicture})` }}>
            {sourcePicture ? null : (
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <span id="picture-span">+</span>Votre photo
              </p>
            )}
          </label>
          <form ref={refPicture}>
            <input
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
        <Input placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} prefix={<PhoneOutlined />} />
        <Input placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} prefix={<LinkedinOutlined />} />
        <Input placeholder="Metier" value={job} onChange={(e) => setJob(e.target.value)} prefix={<UserOutlined />} />
        <Input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} prefix={<UserOutlined />} />
        <Input placeholder="Dernier Master obtenu" value={masterDegree} onChange={(e) => setMasterDegree(e.target.value)} prefix={<UserOutlined />} />
        <form ref={refCv}>
          <div style={{ display: 'flex', backgroundColor: 'white' }}>
            <input type="file" name="cv" encType="multipart/form-data" onChange={changeHandler} style={{ backgroundColor: 'white' }} />
          </div>
        </form>
        <TextArea rows={4} placeholder="présente-toi" value={bio} onChange={(e) => setBio(e.target.value)} />
        <Checkbox onChange={onChange}>Profil public</Checkbox>
      </Modal>
    </>
  );
}

export default Registertwo;
