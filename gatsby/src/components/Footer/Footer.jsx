import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled(motion.footer)`
  height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    /* color: #e0e0e0; */
  }
  .name {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .icon-container {
    margin-top: 10px;
    font-size: 24px;
    .icon {
      margin: 1px;
    }
  }
`;

const titleFadeUpVarient = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

export default function Footer() {
  const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <FooterContainer
      animate={inView ? 'visible' : 'hidden'}
      variants={titleFadeUpVarient}
      transition={{ duration: 1, ease: 'easeOut' }}
      ref={ref}
    >
      <motion.div className="name footer-item">@ Balthazar Ely</motion.div>
      <motion.div className="icon-container">
        <FaGithubSquare className="icon footer-item" />
        <FaLinkedin className="icon footer-item" />
      </motion.div>
    </FooterContainer>
  );
}
