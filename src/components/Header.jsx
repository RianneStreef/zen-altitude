import React from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/icon.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="header">
      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
      <ul className="links hidden-mobile">
        <li>
          <Link to="/#about" className="nav-link">
            Zen Altitude
          </Link>
        </li>
        <li>
          <Link to="/#soins" className="nav-link">
            {languageToUse.soins}
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
          <a href="../pages/prix.pdf" className="nav-link" target="blank">
            {languageToUse.prices}
          </a>
        </li>

        <li>
          <div className="set-language">
            <button
              onClick={() => handleSetLanguage("english")}
              onKeyPress={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("french")}
              onKeyPress={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </button>
          </div>
        </li>
      </ul>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="header-logo" />
      </Link>
    </div>
  );
};

export default Header;
