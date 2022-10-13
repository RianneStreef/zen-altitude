import React from "react";

import "../styles/Hero.css";
import { content } from "../content/languages";

import heroVideo from "../images/videos/hero-video.mp4";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="hero">
      <div className="hero-container">
        <video id="background-video" autoPlay muted playsInline loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>{languageToUse.heroTitle}</h1>
          <h3 className="hero-undertitle">{languageToUse.heroTitle2}</h3>
          <p>{languageToUse.heroText}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
