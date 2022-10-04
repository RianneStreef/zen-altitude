import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";
import introImage from "../images/fanny.jpg";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="intro" id="about">
      <div className="intro-text">
        <h4 className="intro-title">{languageToUse.welcome}</h4>
        <p>{languageToUse.introText1}</p>
        <p>{languageToUse.introText2}</p>
        <p>{languageToUse.introText3}</p>
        <p>{languageToUse.introText4}</p>
        <div className="button-container">
          <Link to="/#contact" className="button">
            Contact
          </Link>
        </div>
      </div>
      <div className="intro-image-container">
        <img src={introImage} alt="" className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
