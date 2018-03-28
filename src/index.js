/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Publications from './containers/Publications';
import Navbar from './components/Navbar';
import Home from './containers/Home';

const App = props => (
  <Router>
    <div>
      <Navbar match={props} />

      {/* Here we add all our routes */}
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Publications} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
