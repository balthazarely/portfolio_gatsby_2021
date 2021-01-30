import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import FormButton from '../components/Common/FormButton';

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

export default function Contact({}) {
  return (
    <Layout variants={container} initial="hidden" animate="show">
      <motion.h1 variants={itemA}>Contact</motion.h1>
      <motion.p variants={itemA}>
        wanna talk about a project or give me a job (hopefully)?
      </motion.p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bit-field"
      >
        <motion.input
          type="text"
          required
          name="name"
          placeholder="your name"
          variants={itemA}
        />
        <motion.input
          type="email"
          required
          name="email"
          placeholder="your email"
          variants={itemA}
        />
        <motion.textarea
          type="text"
          required
          name="message"
          placeholder="your message"
          variants={itemA}
        />
        <FormButton type="submit" variants={itemA}>
          send
        </FormButton>
      </form>
    </Layout>
  );
}
