import React from "react";

import "../styles/Hero.css";

import heroVideo from "../images/videos/hero-video.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video id="background-video" autoplay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
