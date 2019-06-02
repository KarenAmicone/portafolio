import React from 'react';
import Karen from '../assets/Amicone-06.jpg'
import Linkedin from '../assets/linkedin.png'

const About = () => {
    return(
    <section className="about-container">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5">
        <div class="row">
            <div class="col s5">
                <img id= "karen" src={Karen} alt="Karen" class="responsive-img"></img>
            </div>
            <div class="col s7 name">
                <hr></hr>
            <h3>Karen Amicone</h3>
                <hr></hr>
            </div>
        </div>
        <div class="row valign-wrapper">
            <div class="col s12">
                <span class="black-text">
                <p class="flow-text">Hi! I'm Karen Amicone. I love challenges and solving problems with code.</p>
                <br></br>
                <p class="flow-text">I'm a frontend developer, but I've also been involved in arts, social sciences and more!</p>
                <br></br>
                <p class="flow-text">At this moment, I want to work on stimulating projects as a frontend developer, but I want to learn fullstack skills.</p>
                <br></br>
                <p class="flow-text">As well, I'm interested in women's empowerment, environmental care, neurosciences and traveling.</p> 
                </span>
            </div>
        </div>
        <div class="row">
            <div class="col s6">
            <a>Download CV</a>
            </div>
            <div class ="col s6">
            <a><img id="logo" alt="linkedin" src={Linkedin}></img></a>
            </div>
        </div>
        </div>
      </div>  
      </section> 
    )
}

export default About