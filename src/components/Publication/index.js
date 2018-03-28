/* eslint react/prop-types: 0 */

import React from 'react';
import './publication.scss';

const Publication = (props) => {
  const { publication } = props;
  return (
    <div className="tv-publication card">
      <img src="https://picsum.photos/320/240" alt="screenshot" />
      <h2>{publication.platform} {publication.gameTitle} in {publication.movieLength} by {publication.author}</h2>
    </div>
  );
};

export default Publication;
