import React from "react";

import "../styles/Footer.css";

import fb from "../images/fb.svg";
import insta from "../images/insta.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <ul>
          <li>tel</li>
          <li>mail</li>
          <li>horaires</li>
        </ul>
      </div>
      <div className="footer-soins">
        <ul>
          <li>soins 1</li>
          <li>soins 2</li>
          <li>soins 3</li>
          <li>soins 4</li>
        </ul>
      </div>
      <div className="footer-social">
        <ul className="footer-social-list">
          <li>
            <a
              href="https://www.facebook.com/Zen-Altitude-Vall%C3%A9e-des-Belleville-425075494897341/"
              target="blank"
            >
              <img src={fb} className="social-icon" alt="facebook link" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zen.altitude.lesbelleville/"
              target="blank"
            >
              <img src={insta} className="social-icon" alt="instagram link" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
