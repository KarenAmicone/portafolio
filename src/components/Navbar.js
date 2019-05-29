import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () =>{ 
    return (
    <section className="nav">
        <nav>
    <div class="nav-wrapper red darken-1">
      <a href="#!" class="brand-logo center">Karen Amicone</a>
      <ul class="left hide-on-med-and-down">
      </ul>
    </div>
  </nav>
  <ul id="slide-out" class="sidenav">
    <li>
      <div class="user-view">
        <div class="background">
          <img src={logo}></img>
        </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></img></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div>
    </li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </section> 
    )
}

export default Navbar