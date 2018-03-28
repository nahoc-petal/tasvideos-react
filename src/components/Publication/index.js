/* eslint react/prop-types: 0 */

import React from 'react';
import './publication.scss';

const categoriesMock = [
  {
    name: 'kill birds',
  },
  {
    name: 'kill dogs',
  },
];

const renderCategories = (categories) => {
  const items = [];
  categories.forEach((category) => {
    items.push(<span className="tag">{category.name}</span>);
  });
  return items;
};

const Publication = (props) => {
  const { publication } = props;
  return (
    <div className="tv-publication card">
      <img src="https://picsum.photos/320/240" alt="screenshot" />
      <div className="tv-publication__details">
        <h2>{publication.platform} {publication.gameTitle} in {publication.movieLength} by {publication.author}</h2>
        <div>{renderCategories(categoriesMock)}</div>
        <p>After beating 006 in GoldenEye 007, Bond returns to fight Renard, another evil genius attempting to take over the world in a plot similar to the movie this first-person shooter is based on. Armed with various new weapons, Bond skis down the Caucasus Mountains, infiltrates a nuclear bunker, and even makes his way into a sub, all within half an hour. Various glitches are abused here, particularly some that allow Bond to skip some of his objectives and even some entire levels. For more information, see the author's comments.</p>
      </div>
    </div>
  );
};

export default Publication;
