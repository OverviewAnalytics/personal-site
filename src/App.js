import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));
const Live = lazy(() => import('./pages/Live'));
const Insights = lazy(() => import('./pages/Insights'));
const Edge = lazy(() => import('./pages/Edge'));
// const Analytics = lazy (() => import('./pages/Analytics'));

// const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/insights" component={Insights} />
        <Route path="/services" component={Services} />
        <Route path="/live" component={Live} />
        <Route path="/edge" component={Edge} />
        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route component={NotFound} status={404} />

      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
