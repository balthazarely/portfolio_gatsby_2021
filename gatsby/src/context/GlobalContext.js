import React, { useState } from 'react';
// First, we need to create an order context.
const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
