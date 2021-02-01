import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SimpleParralax from '../Parralax/SimpleParralax';

const SectionHeaderWrapper = styled(motion.div)`
  text-align: center;
  color: white;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  /* border: 2px solid pink; */
  .header {
    /* font-size: 46px;
    font-weight: 700; */
    /* margin-bottom: 10px; */
    /* border: 2px solid red; */
  }
  h1 {
    font-size: 46px;
    font-weight: 900;
    margin-bottom: -10px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .subheader {
    /* border: 2px solid red; */
  }
`;

const titleFadeUpVarient = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50,
  },
};

export default function SectionHeader({
  text,
  subtext,
  marginTop = 20,
  marginBottom = 20,
}) {
  const [ref, inView, entry] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    // <SimpleParralax strength={25}>
    <SectionHeaderWrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
      animate={inView ? 'visible' : 'hidden'}
      variants={titleFadeUpVarient}
      transition={{ duration: 1, ease: 'easeOut' }}
      ref={ref}
    >
      <div className="header section-header">
        <h1>{text}</h1>
      </div>
      <div className="subheader section-subheader">
        <h2>{subtext}</h2>
      </div>
    </SectionHeaderWrapper>
    // </SimpleParralax>
  );
}
