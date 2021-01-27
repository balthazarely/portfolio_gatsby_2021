import React, { useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Img from 'gatsby-image';
import { device } from '../../utils/breakpoints';
import imagePlaceholder from '../../assets/image/jpg/dev/regular/portfolio-1.jpg';

const Content = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: .5rem;
  overflow: hidden;
}`;

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
  border: 1px solid green;
  .project-image {
    /* min-width: 100%;
    min-height: 100%; */
    overflow: hidden;
    transform: scale(1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

const containerAnimation = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      staggerChildren: 0.25,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.75,
      // transition: { staggerChildren: 0.07, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};

const infoAnimation = {
  rest: { opacity: 0, y: 50 },
  hover: {
    opacity: 1,
    y: 0,
    // transition: {
    //   type: 'spring',
    //   stiffness: 50,
    //   duration: 1,
    // },
  },
};

const imageAnimation = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
  },
};
function SingleProject({ projectData }) {
  console.log(projectData);
  return (
    <Item
      data-sal="slide-up"
      data-sal-duration="500" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* <motion.div initial="rest" whileHover="hover" animate="rest"> */}
      <ProjectInfoTab variants={infoAnimation}>
        <div className="project-name">{projectData.name}</div>
        <div className="project-description">React, MongoDb, Firebase</div>
      </ProjectInfoTab>
      <ProjectImage
        variants={imageAnimation}
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
        // src={imagePlaceholder}
        alt="123"
      >
        <Img
          className="project-image"
          fluid={projectData.coverImage.asset.fluid}
          alt={projectData.name}
        />
      </ProjectImage>
      {/* </motion.div> */}
    </Item>
  );
}

export default function ImageGridStatic({ allProjects }) {
  return (
    <>
      <Content id="work">
        {allProjects.nodes.map((project) => (
          <>
            <SingleProject projectData={project} />
          </>
        ))}
      </Content>
    </>
  );
}
