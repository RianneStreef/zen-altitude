import React from "react";

import { content } from "../content/languages";
import introImage from "../images/intro-image.png";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="intro">
      <div className="intro-text">{languageToUse.introText}</div>
      <img src={introImage} alt="" className="intro-image" />
    </div>
  );
};

export default Intro;
Intro;
