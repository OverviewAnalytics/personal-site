import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Insights/Cell';
// import data from '../data/insights';
import Strapi from '../components/Template/Strapi';

const Insights = () => (
  <Main
    title="Insights"
    description="Learn about Overview Analytics's services."
  >
    <article className="post" id="insights">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/insights">Insights</Link></h2>
          {/* <p>Services offered by Overview Analytics</p> */}
        </div>
      </header>
      {/* {data.map((insight) => (
        <Cell
          data={insight}
          key={insight.title}
        />
      ))} */}
      <div>
        {Strapi.map((data) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </article>
  </Main>
);

export default Insights;
