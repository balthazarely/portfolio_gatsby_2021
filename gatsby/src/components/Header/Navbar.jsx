import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { device } from '../../utils/breakpoints';
import NavIcon from './NavIcon';
import GlobalContext from '../../context/GlobalContext';
import Menu from './Menu';
import ToggleSwitch from './ToggleSwitch';

const Header = styled.nav`
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 55;
  transition: 0.3s;
  @media ${device.lg} {
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
    }
  }
`;

const NavbarContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  margin-right: 30px;
  margin-left: 30px;
`;

const LogoWrapper = styled(motion.div)`
  padding: 0;
  position: absolute !important;
  font-size: 24px;
  font-weight: 900;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const MenuBtnWrapper = styled(motion.nav)`
  padding: 0;
  position: absolute !important;
  top: 2px;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  .menu-btn {
    position: absolute !important;
    right: 0;
    visibility: visible;
    @media ${device.md} {
      visibility: hidden;
      }
    }
  }
`;

const LinkWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  visibility: hidden;
  .links {
    z-index: 100;
    cursor: pointer;
    padding: 15px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    margin-left: 20px;
  }
  @media ${device.md} {
    visibility: visible;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  z-index: 100;
`;

export default function Navbar() {
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const gContext = useContext(GlobalContext);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 40) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <Header
        className={`sticky-header nav-header ${
          showScrolling ? 'scrolling' : ''
        } ${showReveal ? 'reveal-header' : ''}`}
      >
        <NavbarContainer>
          <LogoWrapper>
            <StyledLink to="/" className="site-logo">
              balthazar.
            </StyledLink>
          </LogoWrapper>
          <MenuBtnWrapper>
            <div className="menu-btn">
              <NavIcon />
            </div>
          </MenuBtnWrapper>

          <LinkWrapper>
            <AnchorLink
              className="links nav-link-text"
              to="/#work"
              title="Work"
            >
              work.
            </AnchorLink>
            <AnchorLink
              className="links nav-link-text"
              to="/#skills"
              title="Work"
            >
              skills.
            </AnchorLink>
            <AnchorLink
              className="links nav-link-text"
              to="/contact"
              title="Work"
            >
              contact.
            </AnchorLink>
            <AnchorLink
              className="links nav-link-text"
              to="/resume"
              title="contact"
            >
              resume.
            </AnchorLink>
            <div style={{ marginLeft: '20px' }}>
              <ToggleSwitch />
            </div>
          </LinkWrapper>
        </NavbarContainer>
      </Header>
      <Menu />
    </>
  );
}
