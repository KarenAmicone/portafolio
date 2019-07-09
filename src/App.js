import React from 'react'
import './App.css'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Intro from './components/Intro'
//import Exp from './components/Experience'
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
