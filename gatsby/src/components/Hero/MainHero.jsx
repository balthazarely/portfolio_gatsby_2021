import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoints';
import ProfilePhoto from '../Common/ProfilePhoto';
import SimpleParralax from '../Parralax/SimpleParralax';
import { Section } from '../../styles/PageStyles';
import ButtonContact from '../Common/ButtonContact';

const HeroWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 40px auto;
  padding: 60px 50px;
  .down-btn {
    color: rgb(86, 179, 129);
    margin-right: 12px;
    font-size: 42px;
  }
`;

const GridWrapper = styled(motion.div)`
  margin: 20px 0px 60px 0px;
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
    text-shadow: 0px 10px 10px rgba(3, 3, 3, 0.12);
  }
  h2 {
    font-weight: 300;
    margin-bottom: 30px;
    margin-right: 30px;
  }
`;

const container = {
  hidden: { rotate: 0 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, type: 'spring', stiffness: 50 },
};

export default function MainHero({ headshot }) {
  return (
    <Section>
      <HeroWrapper>
        <ProfilePhoto headshot={headshot} />
        <GridWrapper variants={container} initial="hidden" animate="show">
          <div>
            {/* <SimpleParralax strength={350}> */}
            <motion.h1 variants={itemA}>
              Front End Developer <span style={{ fontWeight: 300 }}>from </span>
              Denver, CO.
            </motion.h1>
            {/* </SimpleParralax> */}
            {/* <SimpleParralax strength={300}> */}
            <motion.h2 variants={itemA}>
              Hi, I'm Balthazar. I am a passionate web developer with extensive
              experience in graphic design. I enjoy building web apps, beautiful
              user-interfaces, and anything that involves Javascript.
            </motion.h2>
            {/* </SimpleParralax> */}
          </div>
          <motion.div className="btn-wrapper" variants={itemA}>
            {/* <SimpleParralax strength={250}> */}
            <motion.div>
              <ButtonContact main>get in touch</ButtonContact>
            </motion.div>
            {/* </SimpleParralax> */}
          </motion.div>
        </GridWrapper>
      </HeroWrapper>
    </Section>
  );
}
