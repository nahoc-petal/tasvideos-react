/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Publications from './containers/Publications';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link href={`${match.url}/rendering`} to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link href={`${match.url}/components`} to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link href={`${match.url}/props-v-state`} to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => (
        <h3>Please select a topic.</h3>
    )}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link href="/" to="/">Home</Link></li>
        <li><Link href="/about" to="/about">About</Link></li>
        <li><Link href="/topics" to="/topics">Topics</Link></li>
        <li><Link href="/publications" to="/publications">Publications</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/publications" component={Publications} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
