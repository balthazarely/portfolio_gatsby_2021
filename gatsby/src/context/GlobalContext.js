import React, { useState, useEffect } from "react";
const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isDarkMode");
    const initialValue = JSON.parse(saved);
    setDarkMode(initialValue);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!darkMode));
  };

  const toggleNavMenu = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ toggleNavMenu, toggleDarkMode, closeNav, navOpen, darkMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
