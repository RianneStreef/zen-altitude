import React from "react";
import { Helmet } from "react-helmet";

import "../styles/price-list.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const PriceListPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div>
      <Helmet>
        <title>{languageToUse.pricePageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <div className="price-list">
        <h1>{languageToUse.prices}</h1>
        <h2>{languageToUse.product1Title}</h2>
        <ul>
          <li>30 minutes : 50€</li>
          <li>60 minutes : 80€</li>
          <li>90 minutes : 120€</li>
          <li>120 minutes : 150€</li>
        </ul>

        <h2>{languageToUse.product2Title}</h2>
        <ul>
          <li>60 minutes: 95€</li>
        </ul>
        <h2>{languageToUse.product3Title}</h2>
        <ul>
          <li>Xx minutes : Xx€</li>
        </ul>
      </div>
    </div>
  );
};

PriceListPage.Layout = Layout;
export default PriceListPage;
