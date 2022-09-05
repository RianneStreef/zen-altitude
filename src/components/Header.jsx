import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/icon.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  const [pathname, setPathname] = useState(`/`);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    setPathname(window.location.href);

    window.addEventListener("scroll", scrollnav);
    navbar = document.getElementById("navbar");

    function scrollnav() {
      let links = document.getElementById("links");

      let y = window.scrollY;
      let width = window.innerWidth;

      if (y > 0 && width > 768) {
        setHeaderBackground(true);
        links.classList.add("background");
      } else {
        setHeaderBackground(false);
        links.classList.remove("background");
      }

      // if (y === 0 && width > 768) {
      //   setHeaderBackground(false);
      // } else {
      //   setHeaderBackground(true);
      // }
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
        <ul className="links hidden-mobile" id="links">
          <li>
            <Link
              to="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={() => setPathname("/")}
            >
              Zen Altitude
            </Link>
          </li>
          <li>
            <Link
              to="/#soins"
              className={`nav-link ${pathname === "/#soins" ? "active" : ""}`}
              onClick={() => setPathname("/#soins")}
            >
              {languageToUse.soins}
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className={`nav-link ${pathname === "/#contact" ? "active" : ""}`}
              onClick={() => setPathname("/#contact")}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/price-list"
              className={`nav-link ${
                pathname === "/price-list" ? "active" : ""
              }`}
              onClick={() => setPathname("/price-list")}
            >
              {languageToUse.prices}
            </Link>
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
      </div>
    </>
  );
};

export default Header;
