import React, { useEffect } from "react";
import { Link } from "gatsby";

import { Helmet } from "react-helmet";

import "../styles/massages.css";

import Layout from "../components/Layout";
import Header from "../components/Header";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const MassagesPage = function (props) {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    window.addEventListener("scroll", scrollImages);

    let productImage4 = document.getElementById("product-image-4");
    let productImage5 = document.getElementById("product-image-5");

    let productText4 = document.getElementById("product-text-4");
    let productText5 = document.getElementById("product-text-5");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let positionImage4 = productImage4.getBoundingClientRect();
      let positionImage5 = productImage5.getBoundingClientRect();

      if (positionImage4.y < scrollY) {
        productText4.classList.add("remove-margin-left");
        productImage4.classList.add("slide-from-left");
      }
      if (positionImage5.y < scrollY) {
        productImage5.classList.add("slide-from-right");
        productText5.classList.add("remove-margin-right");
      }
    }
  });

  return (
    <div>
      <Helmet>
        <title>{languageToUse.massagesPageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionMassage}
        />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <div className="massages-hero" />

      <div className="header-placeholder" />
      <h1 className="massages-title">{languageToUse.product1Title}</h1>

      <div className="massages">
        <div className="massages-explanation">
          <div className="massage">
            <div
              className="product-description slide-image-left product-image product-image-pregnant"
              id="product-image-4"
            />
            <div
              className="product-description product-description-text-right"
              id="product-text-4"
            >
              <h2>{languageToUse.pregnantTitle}</h2>
              <p>{languageToUse.pregnantText1}</p>
              <p>{languageToUse.pregnantText2}</p>
            </div>
          </div>
          <div className="massage">
            <div
              className="product-description product-description-text-left"
              id="product-text-5"
            >
              <h2>{languageToUse.childTitle}</h2>
              <p>{languageToUse.childText}</p>
            </div>
            <div
              className="product-description slide-image-right product-image product-image-children"
              id="product-image-5"
            />
          </div>
        </div>
      </div>
      <div className="center-button-container">
        <Link to="/price-list" className="button">
          {languageToUse.priceList}
        </Link>
      </div>
    </div>
  );
};

MassagesPage.Layout = Layout;
export default MassagesPage;
