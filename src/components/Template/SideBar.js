import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/kepler.gl.png`} alt="" />
      </Link> */}
      <header>
        <h2>Overview Analytics</h2>
        {/* <p><a href="mailto:info@overviewanalytics.ca">info@overviewanalytics.ca</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Overview Analytics is a Toronto-based advisory services firm focused on
        delivering high-value insights and intelligence to our clients.
        Our insights-oriented, data-driven approach helps mid-market &amp;
        enterprise customers supercharge their analytics practice.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">About</Link> : <Link to="/services" className="button">Learn More</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Overview Analytics <Link to="/">overviewanalytics.ca</Link>. </p>
    </section>
  </section>
);

export default SideBar;
