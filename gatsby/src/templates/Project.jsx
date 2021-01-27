import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function project({ data }) {
  return (
    <>
      <motion.h1>{data.project.name}</motion.h1>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;
