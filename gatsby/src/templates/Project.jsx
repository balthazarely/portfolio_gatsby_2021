import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { device } from '../utils/breakpoints';
import Slider from '../components/Common/Slider';
import ButtonLarge from '../components/Common/ButtonLarge';

const Layout = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 50px;
  text-align: center;
`;

const ProjectHeader = styled(motion.h1)`
  margin-top: 20px;
`;
const ProjectDescriptionWrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  @media ${device.md} {
    grid-template-columns: 40% 60%;
  }
  .project-description-inner {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: center;
    @media ${device.md} {
      text-align: left;
    }
  }
  .image-wrapper {
    padding: 20px;
    position: relative;
    /* height: auto; */
    height: 600px;
    width: 100%;
    overflow: hidden;
  }
  .project-image {
    transform: scale(1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectTags = styled(motion.div)`
  text-align: left;
  color: white;
  padding: 0 20px;
  @media ${device.md} {
    margin-bottom: 20px;
    padding: 0;
  }

  h5 {
    font-size: 16px;
    font-weight: 900;
    text-align: left;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  .tag-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .single-tag-wrapper {
    margin-right: 15px;
  }
  .tag {
    font-size: 18px;
    font-weight: 900;
    line-height: 24px;
    text-align: left;
  }
  .btn {
    margin-right: 20px;
  }
`;

const container = {
  hidden: { y: 30 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.1, // 1
      delayChildren: 0.35,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, y: 20, rotate: 3 },
  show: { opacity: 1, y: 0, rotate: 0 },
};
const itemB = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export default function project({ data }) {
  const { project } = data;
  const prepedImages = project.imagesGallery.map((x) => x.asset.url);

  return (
    <AnimatePresence>
      <Layout>
        <motion.h4>{project.category}</motion.h4>
        <ProjectHeader>{project.name}</ProjectHeader>
        <ProjectDescriptionWrapper
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="project-description-inner">
            <motion.p variants={itemA}>{project.description}</motion.p>
            <ProjectTags>
              <motion.h5 className="tag-header" variants={itemA}>
                Tech
              </motion.h5>
              <motion.div className="tag-wrapper" variants={itemA}>
                {project.tags.map((singelProject) => (
                  <motion.div className="single-tag-wrapper">
                    <FaCheck
                      style={{
                        color: 'rgb(86, 179, 129)',
                        marginRight: '5px',
                        fontSize: '14px',
                      }}
                    />
                    <motion.span className="tag-tech tag">
                      {singelProject}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={itemA}>
                <ButtonLarge marginTop="20" main size="md">
                  Live Site
                </ButtonLarge>
                <ButtonLarge marginTop="20" size="md">
                  Github
                </ButtonLarge>
              </motion.div>
            </ProjectTags>
          </motion.div>
          <motion.div
            style={{ overflow: 'hidden' }}
            className="image-wrapper"
            variants={itemB}
            // variants={container}
            initial="hidden"
            animate="show"
          >
            {/* <Img
            className="project-image gatsby-image-wrapper"
            // fluid={project.coverImage.asset.fluid}
            fluid={project.imagesGallery[0].asset.fluid}
            alt={project.name}
          /> */}
            <Slider images={prepedImages} />
          </motion.div>
        </ProjectDescriptionWrapper>
      </Layout>
    </AnimatePresence>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      category
      description
      tags
      link
      githubLink
      coverImage {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imagesGallery {
        asset {
          url
        }
      }
    }
  }
`;
