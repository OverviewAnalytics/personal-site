import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Full = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Overview Analytics" defaultTitle="Overview Analytics" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="full">
        {props.children}
      {/* </div>
      {props.fullPage ? true : <SideBar />}
    </div> */}
  </HelmetProvider>
);

Full.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Full.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Overview Analytics website.',
};

export default Full;
