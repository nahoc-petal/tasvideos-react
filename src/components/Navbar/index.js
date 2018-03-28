/* eslint react/prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navbar">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbar" className="tv-navbar navbar-menu">
        <Link className="navbar-item" to="/" href="/">Home</Link>
        <Link className="navbar-item" to="/movies" href="/movies">Movies</Link>
        <Link className="navbar-item" to="/game-ressources" href="/game-ressources">Game Ressources</Link>
        <Link className="navbar-item" to="/articles" href="/articles">Articles</Link>
        <Link className="navbar-item" to="/emulators" href="/emulators">Emulators</Link>
        <Link className="navbar-item" to="/submissions" href="/submissions">Submissions</Link>
        <Link className="navbar-item" to="/news" href="/news">News</Link>
        <Link className="navbar-item" to="/forums" href="/forums">Forums</Link>
        <Link className="navbar-item" to="/chat" href="/chat">Chat</Link>
        <Link className="navbar-item" to="/staff" href="/staff">Staff</Link>
        <Link className="navbar-item" to="/about" href="/about">About</Link>
      </div>
    </nav>
  );
};


export default Navbar;
