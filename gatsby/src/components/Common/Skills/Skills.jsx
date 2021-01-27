import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../SectionHeader';
import { Section } from '../../../styles/PageStyles';
import SimpleParralax from '../../Parralax/SimpleParralax';
import { device } from '../../../utils/breakpoints';

const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #56b381;
  padding: 30px;
  margin-top: 60px;
  .innerContainer {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: 60px auto;
    padding: 10px;
    border: 2px solid pink;
    height: 100%;
    @media ${device.md} {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .container {
    border: 2px solid red;
    margin: 10px;
    width: 100%;
  }
  .header {
    font-size: 42px;
    font-weight: 900;
  }
  .skills-list {
    height: 200px;
    border: 2px solid blue;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .skill {
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
  }
`;

const projectFadeUpVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: 50,
  },
};
export default function Skills() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={projectFadeUpVariant}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      ref={ref}
    >
      <Content id="skills" style={{ color: 'white' }}>
        <div className="innerContainer">
          <div className="dev-skills container">
            <div className="header">Dev Skill</div>
            <div className="skills-list">
              <div className="skill">Javascript</div>
              <div className="skill">CSS/SaSS</div>
              <div className="skill">HTML</div>
              <div className="skill">React</div>
              <div className="skill">Gatsby</div>
              <div className="skill">Vue</div>
              <div className="skill">Express</div>
              <div className="skill">Firebase</div>
              <div className="skill">MongoDB</div>
              <div className="skill">GSAP</div>
              <div className="skill">Framer-Motion</div>
            </div>
          </div>
          <div className="design-skills container">
            <div className="header">Dev Skill</div>
            <div className="skills-list">
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Gatsby</div>
              <div className="skill">Vue</div>
              <div className="skill">CSS</div>
            </div>
          </div>
        </div>
      </Content>
    </motion.div>
  );
}
