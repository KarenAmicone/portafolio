import React from 'react'
import './App.css'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <section>
      <Intro/>
      <About/> 
      <Work/> 
      <Experience/>
      <Contact/>
    </section> 
  );
}

export default App;
