import React from "react";
import { Link } from "gatsby";

import "../styles/Footer.css";
import { content } from "../content/languages";

import phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import location from "../images/location.svg";
import clock from "../images/clock.svg";

import fb from "../images/fb.svg";
import insta from "../images/insta.svg";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="footer">
      <div className="footer-contact">
        <ul>
          <li className="footer-contact-item">
            <img src={phone} className="footer-contact-icon" alt="" />
            tel
          </li>
          <li className="footer-contact-item">
            <img src={mail} className="footer-contact-icon" alt="" />
            mail
          </li>
          <li className="footer-contact-item">
            <img src={location} className="footer-contact-icon" alt="" />
            location
          </li>
          <li className="footer-contact-item">
            <img src={clock} className="footer-contact-icon" alt="" />
            horaires
          </li>
        </ul>
      </div>
      <div className="footer-soins">
        <ul>
          <li>
            <Link to="/massages">{languageToUse.product1Title}</Link>
          </li>

          <li>
            <Link to="/#soins">{languageToUse.product2Title}</Link>
          </li>
          <li>
            <Link to="/#soins">{languageToUse.product3Title}</Link>
          </li>
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
