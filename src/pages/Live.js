import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import raw from 'raw.macro';

import Full from '../layouts/Full';

// uses babel to load contents of file
// const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Live = () => (
  <Full
    title="Livestream"
    description="Livestreaming Video"
  >
    <article className="post markdown" id="live">
      {/* <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/live">live</Link></h2>
        </div>
      </header> */}
      <p>
        <iframe title="Kepler Plugin" src="https://kepler.gl/#/demo?mapUrl=https://raw.githubusercontent.com/OverviewAnalytics/KeplerDemo/main/kepler.gl%20(5).json" scrolling="no" frameBorder="1" marginHeight="0px" marginWidth="0px" height="650" width="100%" allowFullScreen />
      </p>
      <p>
        The map above is a demo app built using the Kepler.gl GIS visualization library.
        It takes location data from Industry Canada Spectrum Management System
        Database and maps it using the incredible in-browser,
        hardware-accelerated capabilities of Kepler.gl.
      </p>
      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
      {/* <p>
        <iframe title="vdo.ninja" allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;" src="https://vdo.ninja/?scene&room=overviewroom&transparent&q&s&vb=10000" width="100%" height="450" />
      </p> */}
      {/* <p>
        <iframe
          title="hf"
          src="https://anzorq-finetuned-diffusion.hf.space"
          frameBorder="0"
          width="100%"
          height="450"
        />
      </p> */}
      {/* <p>
        <iframe title="Huggingface Space" src="https://microsoft-hugginggpt.hf.space" width="850" height="450" />
      </p> */}
      <br />
      <br />
    </article>
  </Full>
);

export default Live;
