import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {NavLink} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Work';

function App() {
  return (
    <>
    <Home/>
    <About/>
    </>      
  );
}

export default App;
