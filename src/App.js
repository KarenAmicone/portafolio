import React from 'react'
import './App.css'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Intro from './components/Intro'
//import Exp from './components/Experience'


function App() {
  return (
    <section>
      <Intro/>
      <About/> 
      <section className="part-two">
        <Work/> 
        <Contact/>
      </section>
    </section> 
  );
}

export default App;
