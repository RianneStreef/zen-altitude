import React from "react";
import { Link } from "gatsby";

import "../styles/Footer.css";
import { content } from "../content/languages";

import phone from "../images/phone-white.png";
import mail from "../images/mail-white.png";
import location from "../images/location-white.png";
import clock from "../images/clock-white.png";

import fb from "../images/fb-white.png";
import insta from "../images/insta-white.png";

import logo from "../images/logo-black.svg";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo-container">
          <img src={logo} alt="" className="footer-logo" />
        </div>
        <div className="footer-info">
          <div className="footer-contact">
            <p>Zen Altitude</p>
            <ul>
              <li className="footer-contact-item">
                <a href="tel:0033603778070">
                  <img src={phone} className="footer-contact-icon" alt="" />
                  +33 (0) 6 03 77 80 70{" "}
                </a>
              </li>
              <li className="footer-contact-item">
                <a href="mailto:">
                  <img src={mail} className="footer-contact-icon" alt="" />
                  mail
                </a>
              </li>
              <li className="footer-contact-item">
                <img src={location} className="footer-contact-icon" alt="" />
                Val Thorens, Les Belleville, France
              </li>
              <li className="footer-contact-item">
                <img src={clock} className="footer-contact-icon" alt="" />
                8h - 20h
              </li>
            </ul>
          </div>
          <div className="footer-soins">
            <p>{languageToUse.soins}</p>
            <ul>
              <li className="footer-link-container">
                <Link to="/massages" className="footer-link">
                  {languageToUse.product1Title}
                </Link>
              </li>

              <li className="footer-link-container">
                <Link to="/#soin-jambes" className="footer-link">
                  {languageToUse.product2Title}
                </Link>
              </li>
              <li className="footer-link-container">
                <Link to="/soin-visage" className="footer-link">
                  {languageToUse.product3Title}
                </Link>
              </li>
            </ul>
          </div>
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
      <div className="footer-bottom">
        {" "}
        <span>
          © Zen Altitude. {languageToUse.rights}{" "}
          <Link to="/legal">{languageToUse.legal}</Link> -{" "}
          <a href="https://vts-webdesign.com" target="_blank">
            VTS Webdesign
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
