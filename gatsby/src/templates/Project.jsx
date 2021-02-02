import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { device } from '../utils/breakpoints';
import Slider from '../components/Common/Slider';
import ButtonLarge from '../components/Common/ButtonLarge';
import SEO from '../components/SEO/SEO';

const Layout = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 10px;
  text-align: center;
`;

const ProjectHeader = styled(motion.h1)`
  margin-top: 20px;
`;
const ProjectDescriptionWrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  @media ${device.md} {
    grid-template-columns: 60% 40%;
  }
  .project-description-inner {
    display: flex;
    flex-direction: column;
    @media ${device.xs} {
      padding-right: 0px;
    }
    @media ${device.md} {
      padding-left: 20px;
    }
  }
  p {
    text-align: center;
    font-size: 17px;
    @media ${device.sm} {
      text-align: left;
      font-size: 17px;
    }
    @media ${device.md} {
      text-align: left;
      font-size: 17px;
    }
    @media ${device.lg} {
      text-align: left;
      font-size: 20px;
      /* font-size: 20px; */
    }
  }
  .image-wrapper {
    padding: 20px 0;
    position: relative;
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

const NavigationBtns = styled(motion.div)`
  padding: 40px 20px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  .btn-group {
    width: 50%;
    bo
  }
  a {
    text-decoration: none;
  }
  .next-project {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 12px;
    @media ${device.md} {
      font-size: 16px;
    }
  }
  .btn-next {
    color: rgb(86, 179, 129);
    background: transparent;
    border: none;
    font-weight: 900;
    font-size: 16px;
    @media ${device.md} {
      font-size: 24px;
    }
  }
  .arrow {
    font-size: 15px;
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

export default function project({ data, location }) {
  const { project } = data;
  const prepedImages = project.imagesGallery.map((x) => x.asset.url);

  // Find next project for NEXT btn
  const { allProjects } = data;
  const reducedProjectArray = allProjects.nodes.reduce(
    (r, obj) => r.concat(obj.slug.current),
    []
  );
  const IndexThisProject = reducedProjectArray.indexOf(
    location.pathname.substring(1)
  );

  console.log('THe array', reducedProjectArray);

  console.log('index of this project', IndexThisProject);
  console.log(
    "Project we're going to ",
    reducedProjectArray[IndexThisProject - 1]
  );

  return (
    <>
      <SEO title={project.name} />
      <AnimatePresence>
        <Layout>
          <motion.h4>{project.category}</motion.h4>
          <ProjectHeader>{project.name}</ProjectHeader>
          <ProjectDescriptionWrapper
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              style={{ overflow: 'hidden' }}
              className="image-wrapper"
              variants={itemB}
              // variants={container}
              initial="hidden"
              animate="show"
            >
              <Slider images={prepedImages} />
            </motion.div>
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
                  <ButtonLarge
                    marginTop="20"
                    main
                    size="md"
                    toLink={project.link}
                    newPage
                  >
                    Live Site
                  </ButtonLarge>
                  <ButtonLarge
                    marginTop="20"
                    size="md"
                    toLink={project.githubLink}
                    newPage
                  >
                    Github
                  </ButtonLarge>
                </motion.div>
              </ProjectTags>
            </motion.div>
          </ProjectDescriptionWrapper>
          <NavigationBtns
            className="next-project-btn"
            style={{ marginTop: '20px' }}
          >
            <div className="btn-group">
              {reducedProjectArray[IndexThisProject - 1] !== undefined && (
                <Link
                  to={`/${reducedProjectArray[IndexThisProject + -1]}`}
                  style={{ textAlign: 'left' }}
                >
                  <motion.div className="next-project">
                    previous project:
                  </motion.div>
                  <motion.div
                    className="btn-next"
                    type="button"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <FaArrowLeft className="arrow" />
                    {reducedProjectArray[IndexThisProject + -1]}{' '}
                  </motion.div>
                </Link>
              )}
            </div>

            <div className="btn-group">
              {reducedProjectArray[IndexThisProject + 1] !== undefined && (
                <Link
                  to={`/${reducedProjectArray[IndexThisProject + 1]}`}
                  style={{ textAlign: 'right' }}
                >
                  <motion.div className="next-project">
                    next project:
                  </motion.div>
                  <motion.div
                    className="btn-next"
                    type="button"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {reducedProjectArray[IndexThisProject + 1]}{' '}
                    <FaArrowRight className="arrow" />
                  </motion.div>
                </Link>
              )}
            </div>
          </NavigationBtns>
        </Layout>
      </AnimatePresence>
    </>
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
    allProjects: allSanityProjects(sort: { order: ASC, fields: order }) {
      nodes {
        slug {
          current
        }
      }
    }
  }
`;
