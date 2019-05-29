import React from 'react';
import Karen from '../assets/Amicone-06.jpg'

const About = () => {
    return(
        <section className="about-container">    
            <article className="present-container">
            <img alt="Karen" src={Karen} id="Karen"></img>
                <article className="text-container">
                    <p id="one">I'm a frontend developer with a divergent background that converges in creativity.</p>
                    <p id="two">At the moment I want to work on stimulating projects as a frontend developer, but I'm willing and wishful to be a fullstack developer.</p>
                    <p id="three">I'm interested in tech, arts, social sciences and sustainability.</p>
                </article>
            </article>
            <article className="tools-container">
            </article>
        </section>   
    )
}

export default About