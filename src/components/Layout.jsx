import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";

  const [pathname, setPathname] = useState("/");

  let pathnameIncludes;

  const [screenWidth, setScreenWidth] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleResize() {
      const newSize = window.innerWidth;
      setScreenWidth(newSize);
    }
    window.addEventListener("resize", handleResize);
    setPathname(window.location.href);
  }, [screenWidth, pathname]);

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
      pathnameIncludes,
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
