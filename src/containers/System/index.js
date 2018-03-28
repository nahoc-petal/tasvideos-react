/* eslint react/prop-types: 0 */

import React from 'react';
import axios from 'axios';
import Publication from './../../components/Publication';
import API_URL from './../../config/api';

class System extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: null,
    };
  }
  componentWillMount() {
    this.fetchPublicationsBySystem().then((response) => {
      this.setState({
        publications: response.data,
      });
    });
  }

  fetchPublicationsBySystem = () =>
    axios.get(`${API_URL}/publications`);

  renderPublications = (publications) => {
    const items = [];
    publications.forEach(value =>
      items.push(<li key={value.id}><Publication publication={value} /></li>));
    return items;
  };

  render() {
    const { publications } = this.state;

    return (
      <section className="section">
        <div className="container">
          <div className="tabs is-small">
            <ul>
              <li className="is-active"><a href="/test">All</a></li>
              <li><a href="/test">Moons</a></li>
              <li><a href="/test">Stars</a></li>
              <li><a href="/test">Notable improvement</a></li>
              <li><a href="/test">Console-verified</a></li>
              <li><a href="/test">Has commentary</a></li>
              <li><a href="/test">Recommended for newcomers</a></li>
            </ul>
          </div>
          <br />
          <ul>
            {publications ? this.renderPublications(publications) : null}
          </ul>
        </div>
      </section>
    );
  }
}

export default System;
