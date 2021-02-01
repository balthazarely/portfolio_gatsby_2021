import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';

const ImageWrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  .project-image {
    overflow: hidden;
    transform: scale(1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const container = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.35,
      ease: 'easeOut',
    },
  },
};

const itemB = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export default function ProfilePhoto({ headshot }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <ImageWrapper variants={itemB}>
        <Img
          className="project-image"
          fluid={headshot.headshot.asset.fluid}
          alt="balthazar_headshot"
        />
      </ImageWrapper>
    </motion.div>
  );
}
