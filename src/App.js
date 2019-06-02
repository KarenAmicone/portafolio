import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <Router> 
      <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
    </Router>      
  );
}

export default App;
