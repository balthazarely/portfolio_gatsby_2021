import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ButtonContact from './ButtonContact';

const Layout = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 50px;
  text-align: center;
  color: white;
  h2 {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const listAnimateIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      type: 'spring',
      stiffness: 150,
      mass: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export default function Contact() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <Layout
      transition={{ duration: 0.5, ease: 'easeOut' }}
      animate={inView ? 'visible' : 'hidden'}
      ref={ref}
      variants={listAnimateIn}

      // animate="show"
    >
      <motion.div initial="hidden" animate="visibile">
        <motion.h2>Want to talk more?</motion.h2>
        <ButtonContact main>get in touch</ButtonContact>
      </motion.div>
    </Layout>
  );
}
