import React from "react";
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
      <div className="massages-explanation">
        <h1>{languageToUse.product1Title}</h1>
        <h2>{languageToUse.pregnantTitle}</h2>
        <p>{languageToUse.pregnantText1}</p>
        <p>{languageToUse.pregnantText2}</p>
        <h2>{languageToUse.childTitle}</h2>
        <p>{languageToUse.childText}</p>
      </div>
    </div>
  );
};

MassagesPage.Layout = Layout;
export default MassagesPage;
