import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Products.css";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="products" id="soins">
      <div className="products-container">
        <div className="product-description">
          <h2>{languageToUse.product1Title}</h2>
          <p>{languageToUse.product1Text}</p>
          <div className="center-button-container">
            <Link to="/massages" className="button more-info-button">
              {languageToUse.moreInfo}
            </Link>
          </div>
        </div>
        <div className="product-description">
          <div className="product-image product-image-1" />
        </div>

        <div className="product-description">
          <div className="product-image product-image-2" />
        </div>
        <div className="product-description">
          <h2>{languageToUse.product2Title}</h2>
          <div>
            <p>{languageToUse.product2Text1} </p>
            <ul>
              <li>{languageToUse.product2Li1}</li>
              <li>{languageToUse.product2Li2}</li>
              <li>{languageToUse.product2Li3}</li>
            </ul>
          </div>

          <p>{languageToUse.product2Text2}</p>
          <div className="center-button-container">
            {/* <Link to="/" className="button more-info-button">
              {languageToUse.moreInfo}
            </Link> */}
          </div>
        </div>
        <div className="product-description">
          <h2>{languageToUse.product3Title}</h2>
          <p>{languageToUse.product3Text}</p>
          <div className="center-button-container">
            <Link to="/soin-visage" className="button more-info-button">
              {languageToUse.moreInfo}
            </Link>
          </div>
        </div>
        <div className="product-description">
          <div className="product-image product-image-3" />
        </div>
        {/* <div className="product-description">
          <div className="product-image product-image-4" />
        </div>

        <div className="product-description">
          <h2>{languageToUse.product4Title}</h2>
          <p>{languageToUse.product4Text}</p>
          <div className="center-button-container">
            <Link to="/" className="button more-info-button">
              {languageToUse.moreInfo}
            </Link>
          </div>
        </div> */}
      </div>
      <div className="center-button-container">
        <Link to="/price-list" className="button">
          Price List
        </Link>
      </div>
    </div>
  );
};

export default Products;
