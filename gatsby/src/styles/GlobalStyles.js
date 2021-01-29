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
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
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



.next,
.prev {
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
  transform: scale(-1);
}





`;

export default GlobalStyles;