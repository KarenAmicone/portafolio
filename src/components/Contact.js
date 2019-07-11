import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
    return(
        <ScrollableAnchor id={'section1'}>
    <section className="contact-container">
        <article className="contact">
            <article className="email">
                <h2>Get in touch</h2>
                <br></br>
                <h3>e-mail</h3>
                <a href="mailto:karen_amicone@hotmail.com">karen_amicone@hotmail.com</a>
            </article>
            <article className="social-media">
                <h3>Follow me</h3>
                <img src={instagram} alt="instagram" id="social-media"></img><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/karenamicen/">@karenamicen</a>
                <br></br>
                <img src={github} alt="github" id="social-media"></img><a target="_blank" rel="noopener noreferrer" href="https://github.com/KarenAmicone">KarenAmicone</a>
                <br></br>
                <img src={linkedin} alt="linkedin" id="social-media"></img><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karen-amicone/">karen-amicone</a>
            </article>
            </article>
    </section>
    </ScrollableAnchor>
    )
}

export default Contact