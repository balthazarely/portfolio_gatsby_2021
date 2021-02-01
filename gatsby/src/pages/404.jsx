import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Layout = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 50px;
  text-align: left;
  color: white;
  form {
    margin-top: 40px;
  }
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 24px;
  }
  form {
  }
  input,
  textarea {
    margin: 24px 0;
    padding: 14px 0;
    font-size: 16px;
    display: block;
    background: transparent;
    border: none;
    border-bottom: 1px solid #b3b3b3;
    max-width: 500px;
    width: 100%;
    color: white;
  }
  textarea {
    height: 150px;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const container = {
  hidden: { rotate: 0 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.35,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, y: 20, rotate: 0 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

export default function Thanks() {
  return (
    <Layout variants={container} initial="hidden" animate="show">
      <motion.h1 variants={itemA}>This page doesn't seem to exist...</motion.h1>
    </Layout>
  );
}
