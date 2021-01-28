import React from 'react';
import Layout from './src/components/Layout/layout';
import { GlobalProvider } from './src/context/GlobalContext';

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
export function wrapRootElement({ element }) {
  return <GlobalProvider>{element}</GlobalProvider>;
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
