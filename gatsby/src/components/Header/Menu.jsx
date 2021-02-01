import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import GlobalContext from '../../context/GlobalContext';
import useWindowSize from '../../hooks/useWindowSize';
import ToggleSwitch from './ToggleSwitch';
import downloadFile from '../../assets/resume/Balthazar_Ely_Resume.pdf';

const MenuWrapper = styled(motion.div)`
  z-index: 105;
  position: fixed;
  left: 0;
  top: 70px;
  width: 300px;
  height: 100vh;
  transform: translateX(-300px);
  box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
`;

const MenuContent = styled(motion.div)`
  height: 400px;
  padding: 30px;
  color: black;
  .menu-link {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 900;
    border-bottom: 1px solid #b6b6b6;
    padding-bottom: 12px;
    a {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const Overlay = styled(motion.div)`
  z-index: 47;
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.35);
  width: 100vw;
  height: 100vh;
`;

export default function Menu({}) {
  const gContext = useContext(GlobalContext);
  const windowSize = useWindowSize();

  const menuVarient = {
    visible: {
      transform: 'translateX(0px)',
      transition: { ease: 'easeOut', duration: 0.15 },
    },
    hidden: {
      transform: 'translateX(-300px)',
      transition: { ease: 'easeOut', duration: 0.15 },
    },
  };

  const overlayVarient = {
    visible: {
      visibility: 'visible',
      opacity: 1,
      transition: { duration: 0.15 },
    },
    hidden: {
      visibility: 'hidden',
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  return (
    <>
      <Overlay
        variants={overlayVarient}
        animate={windowSize < 992 && gContext.navOpen ? 'visible' : 'hidden'}
      />
      <MenuWrapper
        className="nav-menu"
        initial={false}
        animate={windowSize < 992 && gContext.navOpen ? 'visible' : 'hidden'}
        variants={menuVarient}
      >
        <MenuContent>
          <div className="menu-link ">
            <AnchorLink
              className="links nav-link-text mobile "
              to="/#work"
              title="Work"
            >
              <div
                onClick={() => {
                  gContext.closeNav();
                }}
              >
                work.
              </div>
            </AnchorLink>
          </div>
          <div className="menu-link">
            <AnchorLink
              className="links nav-link-text mobile"
              to="/#skills"
              title="Work"
            >
              <div
                className="nav-link-hov"
                onClick={() => {
                  gContext.closeNav();
                }}
              >
                skills.
              </div>
            </AnchorLink>
          </div>
          <div className="menu-link">
            <AnchorLink
              className="links nav-link-text mobile"
              to="/contact/"
              title="Work"
            >
              <div
                className="nav-link-hov"
                onClick={() => {
                  gContext.closeNav();
                }}
              >
                contact.
              </div>
            </AnchorLink>
          </div>
          <div className="menu-link">
            <a
              className="links nav-link-text mobile"
              href="https://bannerbin-552ae.web.app/"
              target="_blank"
            >
              <div
                className="nav-link-hov"
                onClick={() => {
                  gContext.closeNav();
                }}
              >
                html banners.
              </div>
            </a>
          </div>
          <div className="menu-link">
            <a
              className="links nav-link-text mobile"
              href={downloadFile}
              target="_blank"
            >
              <div className="nav-link-hov">resume.</div>
            </a>
          </div>
          <ToggleSwitch />
        </MenuContent>
      </MenuWrapper>
    </>
  );
}
