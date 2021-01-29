import React from 'react';
import Layout from './src/components/Layout/layout';
import { GlobalProvider } from './src/context/GlobalContext';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
export function wrapRootElement({ element }) {
  return <GlobalProvider>{element}</GlobalProvider>;
}