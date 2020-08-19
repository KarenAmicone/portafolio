import React from 'react'
import Karen from '../assets/Amicone-06.jpg'


const About = () => {
    return (
        <section className="about-container">
            <article className="about-me">
                <h2 id="title">Hi! I'm Karen Amicone. I love challenges and solving problems with code.</h2>
                <article id="content">
                <br></br>
                    <p>I am a frontend developer who is passionate about learning. First I studied Economics, but I decided to make a career change because I discovered how fascinating and empowering Technology is.</p> 
                    {/* Since last January I've been working at Laboratoria, where I've created several apps with Javascript and React. */}
                    <br></br>
                    <p>I studied Economics at UNAM and frontend development at Laboratoria Coding.</p>
                    <br></br>
                    <p>My main tools are Javascript and React, but I'm eager to learn more!</p> 
                    <br></br>
                </article>
                <a id="contact-a" href='#section1' className="contact-bttn">Contact</a>
            </article>
            <article className="photo">
                <img src={Karen} alt="karen" className="karen"></img>
            </article>
        </section>
    )
}

export default About
