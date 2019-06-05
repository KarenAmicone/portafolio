import React from 'react'
import './App.css'
//import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Intro from './components/Intro';

function App() {
  return (
    <section>
      <Intro/>
      <About/> 
      <Work/> 
      <Contact/>
    </section> 
  );
}

export default App;
