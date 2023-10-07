import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Products from "../../components/Products";
import Contact from "../../components/Contact";
import Consent from "../../components/Consent";

import top from "../../images/top.svg";

const IndexPage = function (props) {
  let { language, languageToUse, setLanguage, pathname } = props;
  languageToUse = content.english;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
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
      />
      <Hero language={language} languageToUse={languageToUse} />
      <Intro language={language} languageToUse={languageToUse} />
      <div className="banner-1 hidden-mobile">
        {/* "La patience est la clé du bien-être." */}
      </div>
      <Products language={language} languageToUse={languageToUse} />
      <div className="banner-2 hidden-mobile" />
      <Contact language={language} languageToUse={languageToUse} />
      <Link to="/" className="top-link">
        <img src={top} alt="Top link" className="top-link-image" />
      </Link>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
