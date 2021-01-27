import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  pageTransitionOne,
  pageTransitionChild,
} from '../Animations/PageAnimation';
import SimpleParralax from '../Parralax/SimpleParralax';

const RuleDiv = styled(motion.div)`
  background: #a1a1a1;
  max-width: 1200px;
  margin: 20px auto 60px;
  height: 2px;
`;

const projectFadeUpVariant = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  hidden: {
    scaleX: 0,
  },
};

export default function Rule() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={projectFadeUpVariant}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={ref}
      >
        <SimpleParralax strength={100}>
          <RuleDiv />
        </SimpleParralax>
      </motion.div>
    </>
  );
}
