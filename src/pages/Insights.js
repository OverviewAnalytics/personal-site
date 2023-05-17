import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Insights/Cell';
import Strapi from '../components/Template/Strapi';
import data from '../data/insights';

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
      {data.map((article) => (
        <Strapi
          data={article}
          key={article.title}
        />))}
      {data.map((insight) => (
        <Cell
          data={insight}
          key={insight.title}
        />))}
    </article>
  </Main>
);

export default Insights;
