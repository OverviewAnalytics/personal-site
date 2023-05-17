import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import Form from '../components/Template/ContactForm';
// import Cell from '../components/Projects/Cell';

// import data from '../data/qr';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact Us"
    description="Contact Overview Analyticss via info @ overviewanalytics.ca"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Contact Us: </p>
        <EmailLink />
        {/* <p>
          <iframe title="intake-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeab0vTCsMLmxKCb-kNwu46QlcqGaBIqZYPR_V_94wKOeOUJQ/viewform?embedded=true" width="800" height="1000" />
        </p> */}
      </div>
      {/* <div className="contact-form">
        <p>
          <Form />
        </p>
      </div> */}
      
      {/* <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://square.site/appointments/buyer/widget/9x0957pgxktr2f/LNBV7SAYVA2FZ" width="100%" height="1300" frameBorder="0" scrolling="yes" />
        </div>
      </header> */}
      {/* <ContactIcons /> */}
    </article>
    <article className="post markdown" id="team">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/team">team</Link></h2>
        </div>
      </header>
      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
      <p>Overview Analytics was founded by <a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/alecjmiller?trk=profile-badge"> Alec Miller </a>
        who holds an <a href="https://ivey.uwo.ca/"> Honours Business Administration degree</a> from the Ivey School of Business and a Certificate in Data Science from <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science">University of Toronto SCS. </a>
        Prior to <a href="https://www.overviewanalytics.ca">Overview Analytics</a>, Alec worked in technology,
        telecom, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>
        , <a href="https://marsdd.com">MaRS</a>
        , <a href="https://techalliance.ca">TechAlliance</a>
        , and <a href="https://lenovo.com">Lenovo</a>.
      </p>
    </article>
  </Main>
);

export default Contact;
