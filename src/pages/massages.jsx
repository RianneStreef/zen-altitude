import React from "react";
import { Link } from "gatsby";

import { Helmet } from "react-helmet";

import "../styles/massages.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const MassagesPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="massages">
      <Helmet>
        <title>{languageToUse.massagesTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <h1>{languageToUse.product1Title}</h1>

      <div className="massages-explanation">
        <div className="product-description">
          <div className="product-image product-image-pregnant" />
        </div>
        <div className="product-description">
          <h2>{languageToUse.pregnantTitle}</h2>
          <p>{languageToUse.pregnantText1}</p>
          <p>{languageToUse.pregnantText2}</p>
        </div>

        <div className="product-description">
          <h2>{languageToUse.childTitle}</h2>
          <p>{languageToUse.childText}</p>
        </div>
        <div className="product-description ">
          <div className="product-image product-image-children" />
        </div>
      </div>
      <div className="center-button-container">
        <Link to="/price-list" className="button">
          Price List
        </Link>
      </div>
    </div>
  );
};

MassagesPage.Layout = Layout;
export default MassagesPage;
