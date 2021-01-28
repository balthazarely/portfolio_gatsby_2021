import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { Section } from '../../styles/PageStyles';
import SimpleParralax from '../Parralax/SimpleParralax';
import { device } from '../../utils/breakpoints';
import ButtonLarge from './ButtonLarge';

const Content = styled(motion.div)`
  /* background: rgba(38, 45, 56, 0.5); */
  padding: 30px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  z-index: 50;
`;

const listAnimateIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.02,
      type: 'spring',
      stiffness: 150,
      mass: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
  },
};

export default function Contact() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      ref={ref}
      variants={listAnimateIn}
    >
      <Content id="Contact" style={{ color: 'white' }}>
        <SectionHeader
          text="contact."
          subtext="Want to talk more?"
          marginBottom="0"
          marginTop="0"
        />
        <div className="center">
          <ButtonLarge>Let's talk</ButtonLarge>
        </div>
      </Content>
    </motion.div>
  );
}
