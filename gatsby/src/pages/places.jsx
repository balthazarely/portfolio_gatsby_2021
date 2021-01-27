import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Page = styled(motion.div)`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  max-width: 800px;

  margin: 0 auto;
`;
const Box = styled(motion.div)`
  height: 50px;
  cursor: pointer;
  background: purple;
  margin: 20px;
`;

const LargeBox = styled(motion.div)`
  height: 250px;
  cursor: pointer;
  background: red;
  margin: 20px;
`;

const albumAnimation = {
  initial: { y: 70, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      // when: 'beforeChildren',
      // staggerChildren: 0.2,
      duration: 0.25,
    },
  },
  exit: {
    y: 70,
    opacity: 0,
    transition: {
      // when: 'beforeChildren',
      // staggerChildren: 0.2,
      duration: 0.25,
    },
  },
};

const item = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  whileHover: { scale: 1.1 },
};

export default function Projects({}) {
  return (
    <>
      <LargeBox />
      <AnchorLink
        to="/#work"
        title="Check out our team!"
        className="stripped"
        stripHash
      />
    </>
  );
}
