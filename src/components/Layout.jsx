import React, { useState, useEffect } from "react";

import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";

  const [pathname, setPathname] = useState("/");
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    function handleResize() {
      const newSize = window.innerWidth;
      setScreenWidth(newSize);
      console.log("setting screenWidth");
    }

    setPathname(window.location.href);

    window.addEventListener("resize", handleResize);
  }, [pathname]);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
      screenWidth,
      setScreenWidth,
    })
  );
  return (
    <div className="layout">
      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Layout;
