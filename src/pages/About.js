import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// import YoutubeEmbed from '../components/Template/YoutubeEmbed';
// import "../components/YoutubeEmbedstyle.css";

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Overview Analytics"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Us</Link></h2>
        </div>
      </header>
      <header>
        <div className="title">
          <iframe title="youtubeembed" src="https://www.youtube.com/embed/lFyXEEekz18" width="100%" height="450" frameBorder="0" scrolling="yes" />
        </div>
      </header>
      {/* <header>
        <div className="title">
          <h1>Youtube Embed</h1>
          <YoutubeEmbed embedId="LXb3EKWsInQ" />
        </div>
      </header>   */}
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
