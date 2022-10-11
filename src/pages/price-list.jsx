import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../styles/price-list.css";

import Layout from "../components/Layout";

import HeaderPrice from "../components/HeaderPrice";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import massage1 from "../images/massage.jpeg";
import massage2 from "../images/pregnant.jpeg";
import massage3 from "../images/child-massage.jpeg";

import soinJambes1 from "../images/soin-jambes.jpeg";

import soinVisage1 from "../images/soin-visage-femme.jpeg";
import soinVisage2 from "../images/soin-visage-homme.jpeg";
import soinVisage3 from "../images/soin-jeux.jpeg";

const PriceListPage = function (props) {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("scroll", handleHeaderMenu);

    const heroHeight = window.innerHeight * 0.6;
    const menuHeight = 160;

    function handleHeaderMenu() {
      const newSize = window.innerWidth;
      setScreenWidth(newSize);

      // if (screenWidth !== undefined) {
      if (window.innerWidth < 769) {
        let yPrice = window.scrollY;
        console.log("mobile size");
        console.log(screenWidth);

        const nav = document.getElementById("navbar-price");
        if (!isHeaderSticky && yPrice > heroHeight) {
          setIsHeaderSticky(true);
          nav.classList.add("lower-nav-fixed-mobile");
        }
        if (isHeaderSticky && yPrice < heroHeight) {
          setIsHeaderSticky(false);
          nav.classList.remove("lower-nav-fixed-mobile");
        }
      } else {
        let yPrice = window.scrollY;
        console.log("desktop size");
        console.log(screenWidth);

        if (!isHeaderSticky && yPrice > menuHeight) {
          setIsHeaderSticky(true);
        }
        if (isHeaderSticky && yPrice < menuHeight) {
          setIsHeaderSticky(false);
        }
        // }
      }
    }
    return () => window.removeEventListener("resize", handleHeaderMenu);
  }, [screenWidth]);

  return (
    <div className="price-list-page">
      <Helmet>
        <title>{languageToUse.pricePageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescriptionPrice} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <HeaderPrice
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <div className="price-list-hero" />
      <div
        className={`price-list-menu ${
          isHeaderSticky ? "fixed-price-list-menu" : ""
        } 
    }`}
      >
        <Link to="/price-list#massages">
          {screenWidth > 767 ? (
            <span>{languageToUse.product1Title}</span>
          ) : (
            <span> {languageToUse.massage}</span>
          )}
        </Link>{" "}
        <span>-</span>
        <Link to="/price-list#soins-jambes">
          {screenWidth > 767 ? (
            <span>{languageToUse.product2Title}</span>
          ) : (
            <span> {languageToUse.legs}</span>
          )}
        </Link>{" "}
        <span>-</span>
        <Link to="/price-list#soins-visage">
          {screenWidth > 767 ? (
            <span>{languageToUse.product3Title}</span>
          ) : (
            <span> {languageToUse.face}</span>
          )}{" "}
        </Link>
      </div>
      <div className="price-list">
        <div id="massages" />

        <h2>{languageToUse.product1Title}</h2>

        <p>{languageToUse.product1Text}</p>
        <div className="price-list-container">
          <div className="price-list-images">
            <img src={massage1} alt="" className="price-list-image" />
            <img
              src={massage2}
              alt=""
              className="price-list-image hidden-mobile"
            />
            <img
              src={massage3}
              alt=""
              className="price-list-image hidden-mobile"
            />
          </div>
          <ul className="price-list-part">
            <li>30 minutes : 50€</li>
            <li>60 minutes : 80€</li>
            <li>90 minutes : 120€</li>
            <li>120 minutes : 150€</li>
          </ul>
        </div>

        <div id="soins-jambes" />
        <h2>{languageToUse.product2Title}</h2>

        <p>{languageToUse.product2Text1}</p>
        <ul>
          <li>{languageToUse.product2Li1}</li>
          <li>{languageToUse.product2Li2}</li>
          <li>{languageToUse.product2Li3}</li>
        </ul>

        <div className="price-list-container price-list-container-inverse">
          <div className="price-list-images">
            <img
              src={soinJambes1}
              alt=""
              className="price-list-image price-image-large"
            />
          </div>

          <ul className="price-list-part">
            <li>60 minutes: 95€</li>
          </ul>
        </div>
        <div id="soins-visage" />
        <h2>{languageToUse.product3Title}</h2>

        <p>{languageToUse.product3Text}</p>

        <div className="price-list-container">
          <div className="price-list-images">
            <img src={soinVisage1} alt="" className="price-list-image" />
            <img
              src={soinVisage2}
              alt=""
              className="price-list-image hidden-mobile"
            />
            <img
              src={soinVisage3}
              alt=""
              className="price-list-image hidden-mobile"
            />
          </div>
          <ul className="price-list-part">
            <h3>{languageToUse.soinVisageFemmeTitle}</h3>
            <li>
              {languageToUse.soinVisageFemme1} -{" "}
              {languageToUse.soinVisageFemme1Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme2} -{" "}
              {languageToUse.soinVisageFemme2Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme3} -{" "}
              {languageToUse.soinVisageFemme3Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme4} -{" "}
              {languageToUse.soinVisageFemme4Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme5} -{" "}
              {languageToUse.soinVisageFemme5Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme6} -{" "}
              {languageToUse.soinVisageFemme6Price}
            </li>
            <li>
              {languageToUse.soinVisageFemme7} - <br />
              {languageToUse.soinVisageFemme7Price1}
              <br />
              {languageToUse.soinVisageFemme7Price2}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

PriceListPage.Layout = Layout;
export default PriceListPage;
