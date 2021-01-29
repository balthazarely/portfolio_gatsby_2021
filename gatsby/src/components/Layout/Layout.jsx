import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Header/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';
import TypographyStyles from '../../styles/Typography';
import { pageTransitionOne } from '../Animations/PageAnimation';
import GlobalContext from '../../context/GlobalContext';
import Footer from '../Footer/Footer';

const PageContainer = styled(motion.div)`
  margin-top: 70px;
  overflow: hidden;
`;

export default function Layout({ children, location }) {
  const gContext = useContext(GlobalContext);

  return (
    <div>
      <GlobalStyles darkMode={gContext.darkMode} />
      <TypographyStyles darkMode={gContext.darkMode} />
      <Navbar />
      <AnimatePresence>
        <PageContainer
          key={location.pathname}
          variants={pageTransitionOne}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </PageContainer>
        <Footer />
      </AnimatePresence>
    </div>
  );
}
