import React from 'react';
import Layout from './src/components/Layout/Layout';
import { GlobalProvider } from './src/context/GlobalContext';
/* eslint-disable react/jsx-props-no-spreading */

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export function wrapRootElement({ element }) {
  return <GlobalProvider>{element}</GlobalProvider>;
}
