import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoints';
import ButtonLarge from '../Common/ButtonLarge';
import ProfilePhoto from '../Common/ProfilePhoto';
import imagePlaceholder from '../../assets/image/jpg/dev/regular/portfolio-1.jpg';
import SimpleParralax from '../Parralax/SimpleParralax';
import { Section } from '../../styles/PageStyles';

const HeroWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 50px;
`;

const GridWrapper = styled(motion.div)`
  margin: 60px 0px;
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
  h1 {
    /* box-shadow: rgba(3, 3, 3, 0.12) 0px 32px 54px; */
    text-shadow: 0px 10px 10px rgba(3, 3, 3, 0.12);
  }
  h2 {
    /* margin-top: -20px; */
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
  hidden: { opacity: 0, y: 20, rotate: 3 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

export default function MainHero() {
  return (
    <Section>
      <HeroWrapper>
        <ProfilePhoto />
        <GridWrapper variants={container} initial="hidden" animate="show">
          <div>
            <SimpleParralax strength={350}>
              <motion.h1 variants={itemA}>
                Complete Solution for SaaS Business.
              </motion.h1>
            </SimpleParralax>
            <SimpleParralax strength={300}>
              <motion.h2 variants={itemA}>
                I create websites for the modern world, not matter how
                insignificant they seem
              </motion.h2>
            </SimpleParralax>
          </div>
          <motion.div className="btn-wrapper" variants={itemA}>
            <SimpleParralax strength={250}>
              <ButtonLarge>Lets get in touch</ButtonLarge>
            </SimpleParralax>
          </motion.div>
        </GridWrapper>
      </HeroWrapper>
    </Section>
  );
}
