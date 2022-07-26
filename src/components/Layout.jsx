import React, { useState, useEffect } from "react";

import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";

  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.href);
  }, [pathname]);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
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
