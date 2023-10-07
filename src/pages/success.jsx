import React from "react";
import { Helmet } from "react-helmet";

import "../styles/success.css";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Consent from "../components/Consent";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const SuccessPage = function (props) {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="success">
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        fontColor="black"
      />
      <div className="header-placeholder" />
      <p>{languageToUse.thanks}</p>
    </div>
  );
};

SuccessPage.Layout = Layout;
export default SuccessPage;
