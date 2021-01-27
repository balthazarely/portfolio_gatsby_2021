import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { DefaultColors } from './ColorScheme';

const GlobalStyles = createGlobalStyle`
 
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .App {
    font-family: sans-serif;
    text-align: center;

  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    --secondary: rgb(161, 161, 161);
    --divider: #343434;
    transition: .2s all;
    background: ${({ darkMode }) =>
      darkMode ? DefaultColors.white : DefaultColors.dark};
  }

  * {
    box-sizing: border-box;
    font-family: ".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText",
      Helvetica, Arial, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  nav {
    font-family: Lato;
    font-weight: 700;
  }
  .nav-header {
    background: ${({ darkMode }) =>
      darkMode ? DefaultColors.white : DefaultColors.dark};
  }
  .nav-menu {
    background: ${({ darkMode }) =>
      darkMode ? DefaultColors.white : DefaultColors.darkLess};
      .menu-link {
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.white};
      }
  }
  .menu-icon {
    background: ${({ darkMode }) =>
      darkMode ? DefaultColors.dark : DefaultColors.white};
  }
  .site-logo {
    color: ${({ darkMode }) =>
      darkMode ? DefaultColors.dark : DefaultColors.white};
  }
  
`;

export default GlobalStyles;
