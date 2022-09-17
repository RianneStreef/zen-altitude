import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { Helmet } from "react-helmet";

import "../styles/soin-visage.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const SoinVisagePage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const menuHeight = 413;
      const yOffset = window.scrollY;
      if (!isHeaderSticky && yOffset > menuHeight) {
        setIsHeaderSticky(true);
      }
      if (isHeaderSticky && yOffset < menuHeight) {
        setIsHeaderSticky(false);
      }
    });
  });

  return (
    <div>
      <Helmet>
        <title>{languageToUse.soinVisagePageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="soin-visage-hero" />
      <div
        className={`price-list-menu ${
          isHeaderSticky ? "fixed-price-list-menu" : ""
        } 
    }`}
      >
        <Link to="/soin-visage#femme">{languageToUse.women}</Link>
        <span>-</span>
        <Link to="/soin-visage#homme">{languageToUse.men}</Link>
      </div>

      <div className="soin-visage">
        <h1>{languageToUse.soinVisageTitle}</h1>

        <div id="femme" />
        <h2>{languageToUse.soinVisageFemmeTitle}</h2>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme1}</h3>
          <p>{languageToUse.soinVisageFemme1Price}</p>
          <p>{languageToUse.soinVisageFemme1SkinType}</p>
          <p>{languageToUse.soinVisageFemme1Effects}</p>
          <p>{languageToUse.soinVisageFemme1Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme2}</h3>
          <p>{languageToUse.soinVisageFemme2Price}</p>
          <p>{languageToUse.soinVisageFemme2SkinType}</p>

          <p>{languageToUse.soinVisageFemme2Effects}</p>
          <p>{languageToUse.soinVisageFemme2Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme3}</h3>
          <p>{languageToUse.soinVisageFemme3Price}</p>
          <p>{languageToUse.soinVisageFemme3SkinType}</p>

          <p>{languageToUse.soinVisageFemme3Effects}</p>
          <p>{languageToUse.soinVisageFemme3Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme4}</h3>
          <p>{languageToUse.soinVisageFemme4Price}</p>
          <p>{languageToUse.soinVisageFemme4SkinType}</p>

          <p>{languageToUse.soinVisageFemme4Effects}</p>
          <p>{languageToUse.soinVisageFemme4Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme5}</h3>
          <p>{languageToUse.soinVisageFemme5Price}</p>
          <p>{languageToUse.soinVisageFemme4SkinType}</p>

          <p>{languageToUse.soinVisageFemme5Effects}</p>
          <p>{languageToUse.soinVisageFemme5Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme6}</h3>
          <p>{languageToUse.soinVisageFemme6Price}</p>
          <p>{languageToUse.soinVisageFemme6Effects}</p>
          <p>{languageToUse.soinVisageFemme6Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageFemme7}</h3>
          <h5>{languageToUse.soinVisageFemme7UnderTitle}</h5>
          <p>{languageToUse.soinVisageFemme7Price1}</p>
          <p>{languageToUse.soinVisageFemme7Price2}</p>
          <p>{languageToUse.soinVisageFemme7Description1}</p>
          <p>{languageToUse.soinVisageFemme7Description2}</p>
        </div>

        <div id="homme" />

        <h2>{languageToUse.soinVisageHommeTitle}</h2>

        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageHomme1}</h3>
          <p>{languageToUse.soinVisageHomme1Price}</p>
          <p>{languageToUse.soinVisageHomme1Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageHomme2}</h3>
          <p>{languageToUse.soinVisageHomme2Price}</p>
          <p>{languageToUse.soinVisageHomme2Description}</p>
        </div>
        <div className="soin-visage-card">
          <h3>{languageToUse.soinVisageHomme3}</h3>
          <p>{languageToUse.soinVisageHomme3Price}</p>
          <p>{languageToUse.soinVisageHomme3Description}</p>
        </div>
      </div>
    </div>
  );
};

SoinVisagePage.Layout = Layout;
export default SoinVisagePage;
