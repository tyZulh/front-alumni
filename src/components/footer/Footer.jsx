import React from 'react';
import Facebook from './img/Facebook.png';
import Instagram from './img/Instagram.png';
import Linkedin from './img/Linkedin.png';
import Twitter from './img/Twitter.png';
import Pantheon from './img/Pantheon.jpg';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="website-box">
        <p className="website">Site officiel</p>
        <div className="line"></div>
        <a href="https://college-ecole-de-droit.u-paris2.fr/fr" target="_blank" rel="noreferrer">
          <img
            className="official-website"
            src={Pantheon}
            alt="Ecole et college de droit"
            title="Collège et Ecole de droit Panthéon-Assas Université Paris 2"
          />
        </a>
      </div>
      <div className="social-container">
        <div className="follow-box">
          <p className="follow">Suivez-nous</p>
          <div className="line"></div>
        </div>
        <div className="social-media">
          <a href="https://twitter.com/CddAssas" target="_blank" rel="noreferrer">
            <img className="logo-f" src={Twitter} alt="Twitter" title="Twitter" />
          </a>
          <a href="https://www.instagram.com/collegededroitassas/" target="_blank" rel="noreferrer">
            <img className="logo-r" src={Instagram} alt="Instagram" title="Instagram" />
          </a>
          <a href="https://www.facebook.com/cdd.edd.assas/" target="_blank" rel="noreferrer">
            <img className="logo-r" src={Facebook} alt="Facebook" title="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/coll%C3%A8ge-de-droit-universit%C3%A9-paris-ii-panth%C3%A9on-assas/"
            target="_blank"
            rel="noreferrer">
            <img className="logo-f" src={Linkedin} alt="Linkedin" title="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
