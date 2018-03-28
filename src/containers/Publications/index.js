/* eslint react/prop-types: 0 */

import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import System from './../System';

const Publications = ({ match }) => (
  <div>
    <h2>Publications</h2>
    <ul>
      <li>
        <Link href={`${match.url}/snes`} to={`${match.url}/snes`}>
          SNES
        </Link>
      </li>
      <li>
        <Link href={`${match.url}/n64`} to={`${match.url}/n64`}>
          N64
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:systemName`} component={System} />
    <Route
      exact
      path={match.path}
      render={() => (
        <h3>Please select a system.</h3>
    )}
    />
  </div>
);

export default Publications;
