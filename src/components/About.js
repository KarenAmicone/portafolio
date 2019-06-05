import React from 'react'
import Karen from '../assets/Amicone-06.jpg'

const About = () => {
    return (
        <section className="about-container">
            <article className="about-me">
                <h2 id="title">Hi! I'm Karen Amicone. I love challenges and solving problems with code.</h2>
                <article id="content">
                <br></br>
                    <p>Since last January I've been working at Laboratoria, where I've created several apps with Javascript vanilla and React.</p> 
                    <br></br>
                    <p>Currently, I'm developing a native app with React Native.</p>
                    <br></br>
                    <p>In addition to web development, I studied a bachelor's degree in Economics at UNAM, which has made it easier for me to start this path due to my self-taught skills, work organization and logical thinking.</p> 
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