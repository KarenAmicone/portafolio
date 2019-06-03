import React from 'react'
import Karen from '../assets/Karen.png'

const About = () => {
    return (
        <section className="about-container">
            <article className="about-me">
                <h2 id="title">Hi! I'm Karen Amicone. I love challenges and solving problems with code.</h2>
                <article id="content">
                    <p>I'm a frontend developer, but I've also been involved in arts, social sciences and more!</p>
                    <br></br>
                    <p>At this moment, I want to work on stimulating projects as a frontend developer, but I want to learn fullstack skills too.</p>
                    <br></br>
                    <p>As well, I'm interested in women's empowerment, environmental care, neurosciences and traveling.</p> 
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