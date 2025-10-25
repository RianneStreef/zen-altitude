import React, { useEffect } from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Products.css";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  useEffect(() => {
    window.addEventListener("scroll", scrollImages);

    let productImage1 = document.getElementById("product-image-1");
    // let productImage2 = document.getElementById("product-image-2");
    let productImage3 = document.getElementById("product-image-3");

    let productText1 = document.getElementById("massage-intro");
    // let productText2 = document.getElementById("soin-jambes");
    let productText3 = document.getElementById("soins-visage-intro");

    function scrollImages() {
      let scrollY = window.innerHeight;
      let positionImage1 = productImage1.getBoundingClientRect();
      // let positionImage2 = productImage2.getBoundingClientRect();
      let positionImage3 = productImage3.getBoundingClientRect();

      if (positionImage1.y < scrollY) {
        productText1.classList.add("remove-margin-right");
        productImage1.classList.add("slide-from-right");
      }
      // if (positionImage2.y < scrollY) {
      //   productImage2.classList.add("slide-from-left");
      //   productText2.classList.add("remove-margin-left");
      // }
      if (positionImage3.y < scrollY) {
        productText3.classList.add("remove-margin-right");
        productImage3.classList.add("slide-from-right");
      }
    }
  });

  return (
    <div className="products" id="soins">
      <div className="header-placeholder" />
      <div className="products-container">
        <div className="product product-reverse">
          <div
            className="product-description product-text product-description-text-left"
            id="massage-intro"
          >
            <h2>{languageToUse.product1Title}</h2>
            <p>{languageToUse.product1Text}</p>
            <div className="button-container">
              <Link
                to={language === "english" ? "/en/massages" : "/massages"}
                className="button more-info-button"
              >
                {languageToUse.moreInfo}
              </Link>
            </div>
          </div>
          <div
            className="product-description slide-image-right product-image product-image-1"
            id="product-image-1"
          />
        </div>

        <div className="product">
          <div
            className="product-description slide-image-left product-image product-image-3"
            id="product-image-3"
          />
          <div
            className="product-description product-text product-description-text-right"
            id="soins-visage-intro"
          >
            <h2>{languageToUse.product3Title}</h2>
            <p>{languageToUse.product3Text}</p>
            <div className="button-container">
              <Link
                to={language === "english" ? "/en/soin-visage" : "/soin-visage"}
                className="button more-info-button"
              >
                {languageToUse.moreInfo}
              </Link>
            </div>
          </div>

          {/* <div
            className="product-description slide-image-left product-image product-image-2"
            id="product-image-2"
          />

          <div
            className="product-description product-text product-description-text-right"
            id="soin-jambes"
          >
            <h2>{languageToUse.product3Title}</h2>
            <div>
              <p>{languageToUse.product3Text1} </p>
              <ul>
                <li>{languageToUse.product3Li1}</li>
                <li>{languageToUse.product3Li2}</li>
                <li>{languageToUse.product3Li3}</li>
              </ul>
            </div>

            <p>{languageToUse.product3Text2}</p>
          </div> */}
        </div>

        {/* <div className="product product-reverse">
          <div
            className="product-description product-text product-description-text-left"
            id="soins-visage-intro"
          >
            <h2>{languageToUse.product3Title}</h2>
            <p>{languageToUse.product3Text}</p>
            <div className="button-container">
              <Link to="/soin-visage" className="button more-info-button">
                {languageToUse.moreInfo}
              </Link>
            </div>
          </div>
          <div
            className="product-description slide-image-right product-image product-image-3"
            id="product-image-3"
          />
        </div> */}
      </div>
      <div className="center-button-container">
        <Link to="/price-list" className="button">
          {languageToUse.priceList}
        </Link>
      </div>
    </div>
  );
};

export default Products;
