import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GlobalContext from '../../context/GlobalContext';

const MenuIcon = styled(motion.div)`
  /* position: absolute;
  right: 3rem; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 2.5rem;
  height: 2rem;
  /* padding: 1rem; */
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  /* visibility: hidden;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    visibility: visible;
  } */

  div {
    width: 100%;
    height: 3px;
    border-radius: 7px;
    position: relative;
    transform-origin: 5px;
    transition: opacity 150ms, transform 200ms;

    :first-child {
      transform: ${({ showNav }) =>
        showNav ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    :nth-child(2) {
      opacity: ${({ showNav }) => (showNav ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ showNav }) =>
        showNav ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
`;
export default function NavIcon() {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <MenuIcon
        onClick={() => {
          gContext.toggleNavMenu();
        }}
        showNav={gContext.navOpen}
      >
        <div className="menu-icon" />
        <div className="menu-icon" />
        <div className="menu-icon" />
      </MenuIcon>
    </>
  );
}
