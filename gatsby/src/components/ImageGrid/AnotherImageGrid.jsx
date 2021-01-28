import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Img from 'gatsby-image';
import { device } from '../../utils/breakpoints';
import imagePlaceholder from '../../assets/image/jpg/dev/regular/portfolio-1.jpg';
import SimpleParralax from '../Parralax/SimpleParralax';
import SectionHeader from '../Common/SectionHeader';
import { Section } from '../../styles/PageStyles';

const Content = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
`;

const Item = styled(motion.div)`
  height: 250px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .project-image {
    border-radius: 15px;
    overflow: hidden;
    transform: scale(1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(22, 29, 45, 0.35);
  z-index: 101;
  border-radius: 13px;
  transition: 0.4s;
`;

const ProjectInfoTab = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  width: 90%;
  height: 30%;
  margin: 20px;
  border-radius: 13px;
  z-index: 52;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  .project-name {
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin-bottom: 6px;
  }
  .project-description {
    font-size: 14px;
    color: #646464;
  }
`;

const projectInfoPopupVariant = {
  rest: { opacity: 0, y: 50 },
  hover: {
    opacity: 1,
    y: 0,
  },
};

const hoverProjectVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    background: 'transparent',
  },
};

const projectFadeUpVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

function SingleProject({ projectData }) {
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
      {/* <SimpleParralax strength={200}> */}
      <Item initial="rest" animate="rest" whileHover="hover">
        <ProjectInfoTab variants={projectInfoPopupVariant}>
          <div className="project-name">{projectData.name}</div>
          <div className="project-description">React, MongoDb, Firebase</div>
        </ProjectInfoTab>
        <ProjectImage
          variants={hoverProjectVariant}
          whileHover="hover"
          transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
          alt="project-image"
        >
          <Overlay variants={hoverProjectVariant} whileHover="hover" />
          <Img
            className="project-image"
            fluid={projectData.coverImage.asset.fluid}
            alt={projectData.name}
          />
        </ProjectImage>
      </Item>
      {/* </SimpleParralax> */}
    </motion.div>
  );
}

export default function ImageGridStatic({ allProjects }) {
  return (
    <Section>
      <SectionHeader
        text="work."
        subtext="some of my recent projects."
        marginBottom="0"
        // marginTop="60"
      />
      <Content id="work">
        {allProjects.nodes.map((project) => (
          <>
            <SingleProject projectData={project} />
          </>
        ))}
      </Content>
    </Section>
  );
}
