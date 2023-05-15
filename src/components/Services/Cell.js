import React from 'react';
import PropTypes from 'prop-types';
import Strapi from '../Template/Strapi';
// import dayjs from 'dayjs';

// eslint-disable-next-line react/function-component-definition
const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        {/* <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time> */}
      </header>
      <p />
      {/* <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a> */}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    // date: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
