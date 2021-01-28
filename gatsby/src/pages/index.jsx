import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import MainHero from '../components/Hero/MainHero';
import FinalImageGrid from '../components/ImageGrid/FinalImageGrid';
import Rule from '../components/Common/Rule';
import Skills from '../components/Common/Skills';
import Contact from '../components/Common/Contact';

const Layout = styled(motion.div)`
  margin: 0 auto;
  /* max-width: 1200px; */
  /* padding: 0 50px; */
`;

export default function Index({ data }) {
  const { allProjects } = data;

  return (
    <Layout>
      <MainHero />
      {/* <Rule /> */}
      <FinalImageGrid allProjects={allProjects} />
      <Skills />
      <Contact />
    </Layout>
  );
}
export const query = graphql`
  query MyQuery {
    allProjects: allSanityProjects(sort: { order: ASC, fields: order }) {
      nodes {
        name
        tags
        slug {
          current
        }
        coverImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagesGallery {
          asset {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`;
