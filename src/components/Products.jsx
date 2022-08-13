import React from "react";

import { content } from "../content/languages";

import "../styles/Products.css";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="products">
      <div className="products-container">
        <div className="product-description">
          <h2>{languageToUse.product1Title}</h2>
          <p>{languageToUse.product1Text}</p>
        </div>
        <div className="product-description">
          <div className="product-image product-image-1" />
        </div>
        <div className="product-description">
          <h2>{languageToUse.product2Title}</h2>
          <p>{languageToUse.product2Text}</p>
        </div>
        <div className="product-description">
          <div className="product-image product-image-2" />
        </div>

        <div className="product-description">
          <div className="product-image product-image-3" />
        </div>
        <div className="product-description">
          <h2>{languageToUse.product3Title}</h2>
          <p>{languageToUse.product3Text}</p>
        </div>
        <div className="product-description">
          <div className="product-image product-image-4" />
        </div>
        <div className="product-description">
          <h2>{languageToUse.product4Title}</h2>
          <p>{languageToUse.product4Text}</p>
        </div>
      </div>
      <div className="button-container">
        <a href="../content/pricelist.pdf" target="blank">
          Price List
        </a>
      </div>
    </div>
  );
};

export default Products;
