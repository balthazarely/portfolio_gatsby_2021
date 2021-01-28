import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { Section } from '../../styles/PageStyles';
import SimpleParralax from '../Parralax/SimpleParralax';
import { device } from '../../utils/breakpoints';

const Content = styled(motion.div)`
  padding: 30px;
  position: relative;
  margin-top: 60px;
  z-index: 50;
  .mainHeader {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 140px;
    font-weight: 900;
  }
`;

const InnerContainer = styled(motion.div)`
  z-index: 150;
  display: grid;
  display: grid;
  grid-template-columns: 1fr;
  /* display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column; */
  max-width: 1000px;
  margin: 60px auto;
  height: 100%;
  position: relative;
  @media ${device.md} {
    grid-template-columns: 70% 30%;
  }
`;

const SkillsContainer = styled(motion.div)`
  margin: 10px;
  width: 100%;
  position: relative;
  .list {
    height: 170px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const SkillHeader = styled(motion.div)`
  font-size: 28px;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 5px;
`;

const SkillItem = styled(motion.div)`
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  padding-left: 20px;
  /* color: #cecece; */
  @media ${device.sm} {
    font-size: 16px;
  }
  @media ${device.md} {
    font-size: 18px;
  }
`;

const DownwardLine = styled(motion.div)`
  background: #e0e0e0;
  width: 2px;
  height: 100%;
  position: absolute;
  color: #e0e0e0;
  opacity: 0.6;
  top: 2px;
  left: -15px;
  visibility: hidden;
  @media ${device.md} {
    visibility: visible;
  }
`;

const projectFadeUpVariant = {
  visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren' } },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

const listAnimateIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.02,
      type: 'spring',
      stiffness: 150,
      mass: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
  },
};

const skillFadeUp = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const skillsHeader = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
};

const lineGrow = {
  visible: {
    height: '100%',
    x: 0,
  },
  hidden: {
    height: '0%',
    x: -20,
  },
};

export default function Skills() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const devSkills = [
    'Javascript',
    'CSS/SaSS',
    'HTML',
    'React',
    'Gatsby',
    'Vue',
    'Express',
    'Firebase',
    'MongoDB',
    'GSAP',
    'Framer-Motion',
    'Responsive Design',
    'Sanity CMS',
  ];

  const otherSkills = [
    'Adobe Suite',
    'Sketch',
    'Figma',
    'Print Production',
    'Logo Design',
  ];

  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      ref={ref}
      variants={listAnimateIn}
    >
      <Content id="skills" className="color-block" style={{ color: 'white' }}>
        <div className="mainHeader skill-header-bg">skills.</div>

        <InnerContainer variants={listAnimateIn}>
          <SkillsContainer>
            <SkillHeader
              variants={skillsHeader}
              transition={{ ease: 'easeOut', duration: 0.5 }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="skill-header"
            >
              Development
            </SkillHeader>
            <DownwardLine
              initial="hidden"
              variants={lineGrow}
              transition={{ duration: 0.5 }}
              animate={inView ? 'visible' : 'hidden'}
              ref={ref}
            />
            <motion.div className="list">
              {devSkills.map((skill) => (
                <motion.div variants={skillFadeUp} initial="hidden">
                  <SkillItem
                    className="skill"
                    initial="hidden"
                    variants={skillFadeUp}
                    animate={inView ? 'visible' : 'hidden'}
                    ref={ref}
                  >
                    <FaCheck
                      style={{
                        color: 'rgb(86, 179, 129)',
                        marginRight: '8px',
                        fontSize: '11px',
                      }}
                    />
                    {skill}
                  </SkillItem>
                </motion.div>
              ))}
            </motion.div>
          </SkillsContainer>
          <SkillsContainer>
            <SkillHeader
              variants={skillsHeader}
              transition={{ ease: 'easeOut', duration: 0.5 }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="skill-header"
            >
              Other
            </SkillHeader>
            <DownwardLine
              initial="hidden"
              variants={lineGrow}
              transition={{ duration: 0.5 }}
              animate={inView ? 'visible' : 'hidden'}
              ref={ref}
            />
            <motion.div className="list">
              {otherSkills.map((skill) => (
                <motion.div variants={skillFadeUp} initial="hidden">
                  <SkillItem
                    className="skill"
                    initial="hidden"
                    variants={skillFadeUp}
                    animate={inView ? 'visible' : 'hidden'}
                    ref={ref}
                  >
                    <FaCheck
                      style={{
                        color: 'rgb(86, 179, 129)',
                        marginRight: '8px',
                        fontSize: '11px',
                      }}
                    />
                    {skill}
                  </SkillItem>
                </motion.div>
              ))}
            </motion.div>
          </SkillsContainer>
        </InnerContainer>
      </Content>
    </motion.div>
  );
}
