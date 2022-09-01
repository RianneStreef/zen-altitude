import React from "react";
import { Helmet } from "react-helmet";

import "../styles/price-list.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import massage1 from "../images/massage.jpeg";
import massage2 from "../images/pregnant.jpeg";
import massage3 from "../images/child-massage.jpeg";

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
        <div className="price-list-container">
          <div className="price-list-images">
            <img src={massage1} alt="" className="price-list-image" />
            <img src={massage2} alt="" className="price-list-image" />
            <img src={massage3} alt="" className="price-list-image" />
          </div>
          <ul className="price-list-part">
            <h2>{languageToUse.product1Title}</h2>

            <li>30 minutes : 50€</li>
            <li>60 minutes : 80€</li>
            <li>90 minutes : 120€</li>
            <li>120 minutes : 150€</li>
          </ul>
        </div>
        <div className="price-list-container price-list-container-inverse">
          <div className="price-list-images">
            <img src={massage1} alt="" className="price-list-image" />
            <img src={massage2} alt="" className="price-list-image" />
            <img src={massage3} alt="" className="price-list-image" />
          </div>

          <ul className="price-list-part">
            <h2>{languageToUse.product2Title}</h2>
            <li>60 minutes: 95€</li>
          </ul>
        </div>
        <div className="price-list-container">
          <div className="price-list-images">
            <img src={massage1} alt="" className="price-list-image" />
            <img src={massage2} alt="" className="price-list-image" />
            <img src={massage3} alt="" className="price-list-image" />
          </div>
          <ul className="price-list-part">
            <h2>{languageToUse.product3Title}</h2>
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
