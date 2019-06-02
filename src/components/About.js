import React from 'react'
import Karen from '../assets/Amicone-06.jpg'

const About = () => {
    return (
        <section className="about-container">
            <article className="about-me">
                <button>Contact</button>
            </article>
            <article className="photo">
                <img src={Karen} alt="karen" className="karen"></img>
            </article>
        </section>
    )
}

export default About