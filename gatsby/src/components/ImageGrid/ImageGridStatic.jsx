import React, { useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import { device } from '../../utils/breakpoints';
// import imgT8 from "../assets/image/jpg/dev/regular/portfolio-8.jpg";
import imagePlaceholder from '../../assets/image/jpg/dev/regular/portfolio-1.jpg';
import { pageTransitionOne } from '../Animations/PageAnimation';

const Content = styled(Masonry)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr;
  overflow-x: hidden;
  & > div {
    margin: 1%;
  }
  @media ${device.lg} {
    grid-template-columns: 3fr;
  }
  @media ${device.sm} {
    grid-template-columns: 2fr;
  }
  @media ${device.md} {
    grid-template-columns: 2fr;
  }
}`;

const Item = styled(motion.div)`
  min-width: 98%;
  width: 300px;
  height: 300px;
  overflow: hidden;
  .project-image {
    min-width: 100%;
    overflow: hidden;
    transform: scale(1);
  }
  @media ${device.sm} {
    min-width: 48%;
  }
  @media ${device.md} {
    min-width: 48%;
  }
  @media ${device.lg} {
    min-width: 31.3%;
  }
`;

const ProjectImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
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

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const containerAnimation = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.75,
      transition: { staggerChildren: 0.07, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};
const infoAnimation = {
  rest: { opacity: 0, y: 50 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 1,
    },
  },
};

const imageAnimation = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
  },
};

function SingleProject() {
  return (
    <Item
    // variants={containerAnimation}
    >
      <Link to="/places">
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <ProjectInfoTab variants={infoAnimation}>
            <div className="project-name">Skiing App</div>
            <div className="project-description">React, MongoDb, Firebase</div>
          </ProjectInfoTab>
          <ProjectImage
            variants={imageAnimation}
            whileHover="hover"
            transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
            src={imagePlaceholder}
            className="project-image"
            alt="123"
          />
        </motion.div>
      </Link>
    </Item>
  );
}

export default function ImageGridStatic() {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 0.25,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('enter');
  //   } else if (!inView) {
  //     // controls.start('exit');
  //   }
  // }, [controls, inView]);

  return (
    <>
      <motion.div
      // ref={ref}
      // animate={controls}
      // initial="initial"
      // animate="enter"
      >
        <Content>
          {data.map((x) => (
            <>
              <SingleProject key={x} />
            </>
          ))}
        </Content>
      </motion.div>
    </>
  );
}
