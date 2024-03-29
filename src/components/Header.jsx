import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/logo-rose.svg";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage, pathname, fontColor } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    let navLink1 = document.getElementById("nav-link1");
    let navLink2 = document.getElementById("nav-link2");
    let navLink3 = document.getElementById("nav-link3");
    let navLink4 = document.getElementById("nav-link4");

    navLink1.style.color = fontColor;
    navLink2.style.color = fontColor;
    navLink3.style.color = fontColor;
    navLink4.style.color = fontColor;
    window.addEventListener("scroll", scrollnav);
    let headerLinks = document.getElementById("headerLinks");

    function scrollnav() {
      let y = window.scrollY;
      let width = window.innerWidth;

      if (y > 0 && width > 768) {
        setHeaderBackground(true);
        headerLinks.classList.add("background");
      } else {
        setHeaderBackground(false);
        headerLinks.classList.remove("background");
      }
    }
  });

  return (
    <>
      <div className="header-contact">
        <p>Zen Altitude</p>
        <a href="tel:+33 6 03 77 80 70">+33 6 03 77 80 70</a>
      </div>
      <div
        className={`header ${headerBackground ? "header-background" : ""}`}
        id="navbar"
      >
        <div className="hidden-desktop">
          <Burger
            language={language}
            setLanguage={setLanguage}
            languageToUse={languageToUse}
          />
        </div>
        <Link to="/" className="logo-link hidden-mobile">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
        <ul className="links hidden-mobile" id="headerLinks">
          <li>
            <Link
              to={language === "french" ? "/" : "/en/"}
              className={`nav-link ${
                pathname === "/" || pathname === "http://localhost:8000/"
                  ? "active"
                  : ""
              }`}
              id="nav-link1"
            >
              Zen Altitude
            </Link>
          </li>
          <li>
            <Link
              to={language === "french" ? "/#soins" : "/en/#soins"}
              className={`nav-link ${
                pathname === "/#soins" ||
                pathname === "http://localhost:8000/#soins"
                  ? "active"
                  : ""
              }`}
              id="nav-link2"
            >
              {languageToUse.soins}
            </Link>
          </li>
          <li>
            <Link
              to={language === "french" ? "/#contact" : "/en/#contact"}
              className={`nav-link ${
                pathname === "/#contact" ||
                pathname === "http://localhost:8000/#contact"
                  ? "active"
                  : ""
              }`}
              id="nav-link3"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={language === "french" ? "/price-list" : "/en/price-list"}
              className={`nav-link ${
                pathname === "https://zen-altitude.netlify.app/price-list" ||
                pathname === "http://localhost:8000/price-list"
                  ? "active"
                  : ""
              }`}
              id="nav-link4"
            >
              {languageToUse.prices}
            </Link>
          </li>

          <li>
            <div className="set-language">
              <Link
                to="/en/"
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
              </Link>
              <Link
                to="/"
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
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
