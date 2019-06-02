import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => { 
  return (
    <nav>
      <article className="nav-wrapper">
      <ul>
      <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink  to="/work">Work</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </article>
        </nav>
  )    
}

export default Navbar