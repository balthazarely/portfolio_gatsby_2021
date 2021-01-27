import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Navbar from '../Header/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';
import TypographyStyles from '../../styles/Typography';
import { pageTransitionOne } from '../Animations/PageAnimation';
import GlobalContext from '../../context/GlobalContext';

const PageContainer = styled(motion.div)`
  margin-top: 70px;
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
      </AnimatePresence>
    </div>
  );
}
