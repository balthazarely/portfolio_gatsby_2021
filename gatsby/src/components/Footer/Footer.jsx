import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const BtnWrapper = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
`;
const FooterContainer = styled(motion.footer)`
  margin-top: 30px;
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

export default function Footer() {
  return (
    <FooterContainer>
      <motion.div className="name footer-item">@ Balthazar Ely</motion.div>
      <motion.div className="icon-container">
        <BtnWrapper href="https://github.com/balthazarely" target="_blank">
          <FaGithubSquare className="icon footer-item" />
        </BtnWrapper>
        <BtnWrapper
          href="https://www.linkedin.com/in/balthazarely/"
          target="_blank"
        >
          <FaLinkedin className="icon footer-item" />
        </BtnWrapper>
      </motion.div>
    </FooterContainer>
  );
}
