import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  width: 100vw;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #000;
    padding-right: 25px;
    margin: 10px 0;
   
    font-size: 20px;
    a {
      color: #000;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  flex-flow: column nowrap;
  background-color: #fff;
  color: #000
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5rem;

  transition: transform 0.3s ease-in-out;
`;

const Navbar = (props) => {
  let { open, setOpen } = props;

  let { language, setLanguage, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link
            to={language === "french" ? "/" : "/en/"}
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Zen Altitude
          </Link>
        </li>
        <li>
          <Link
            to={language === "french" ? "/#soins" : "/en/#soins"}
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.soins}
          </Link>
        </li>
        <li>
          <Link
            to={language === "french" ? "/#contact" : "/en/#contact"}
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={language === "french" ? "/price-list" : "/en/price-list"}
            onClick={() => setOpen(!open)}
          >
            {languageToUse.prices}
          </Link>
        </li>

        <li className="social-links-header">
          <div className="nav-item-language">
            <Link to="/en/">
              <img
                src={flagEn}
                onClick={() => handleSetLanguage("english")}
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </Link>
            <Link to="/">
              <img
                src={flagFr}
                onClick={() => handleSetLanguage("french")}
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </Link>
          </div>
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
