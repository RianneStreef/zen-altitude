import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";

  const [pathname, setPathname] = useState("/");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    setPathname(window.location.href);
  });
  //  let languageInStorage = "";

  // useEffect(() => {
  //   if (localStorage.getItem("languageInStorage")) {
  //     setLanguage(languageInStorage);
  //     console.log("language found");
  //     console.log(languageInStorage);
  //   }
  // }, []);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
      screenWidth,
      setScreenWidth,
      isHeaderSticky,
      setIsHeaderSticky,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        pathname={pathname}
        isHeaderSticky={isHeaderSticky}
        setIsHeaderSticky={setIsHeaderSticky}
      />
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
