import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoints';
import ButtonLarge from '../Common/ButtonLarge';
import ProfilePhoto from '../Common/ProfilePhoto';

const HeroWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 50px;
`;

const GridWrapper = styled(motion.div)`
  margin: 60 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.lg} {
    flex-direction: row;
    align-items: flex-end;
  }
  .btn-wrapper {
    width: 600px;
    cursor: pointer;
  }
  h2 {
    font-weight: 300;
    margin-bottom: 30px;
    margin-right: 30px;
  }
`;
const container = {
  hidden: { rotate: 90 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function MainHero() {
  return (
    <HeroWrapper>
      <ProfilePhoto />
      <GridWrapper variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={itemA}>
            Complete Solution for SaaS Business.
          </motion.h1>
          <motion.h2 variants={itemA}>
            I create websites for the modern world, not matter how insignificant
            they seem
          </motion.h2>
        </div>
        <motion.div className="btn-wrapper" variants={itemA}>
          <ButtonLarge>Lets get in touch</ButtonLarge>
        </motion.div>
      </GridWrapper>
    </HeroWrapper>
  );
}
