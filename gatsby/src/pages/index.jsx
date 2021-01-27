import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import MainHero from '../components/Hero/MainHero';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import AnotherImageGrid from '../components/ImageGrid/AnotherImageGrid';

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
      <AnotherImageGrid allProjects={allProjects} />
    </Layout>
  );
}
export const query = graphql`
  query MyQuery {
    allProjects: allSanityProjects {
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
