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
          <h2>Movies</h2>
          <ul>
            {publications ? this.renderPublications(publications) : null}
          </ul>
        </div>
      </section>
    );
  }
}

export default System;
