import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'

const Contact = () => {
    return(
        <ScrollableAnchor id={'section1'}>
    <section className="contact-container">
        <article className="contact">
            <article className="email">
                <h2>Get in touch</h2>
                <br></br>
                <h3>e-mail</h3>
                <p>karen_amicone@hotmail.com</p>
                <br></br>
            </article>
            <article className="social-media">
                <h3>Follow me</h3>
                <img src={instagram} alt="instagram" id="social-media"></img><a href="https://www.instagram.com/karenamicen/">@karenamicen</a>
                <br></br>
                <img src={linkedin} alt="linkedin" id="social-media"></img><a href="https://www.linkedin.com/in/karen-amicone-centeno/">Karen Amicone</a>
                <br></br>
                <img src={github} alt="github" id="social-media"></img><a href="https://github.com/KarenAmicone">KarenAmicone</a>
            </article>
        </article>
    </section>
    </ScrollableAnchor>
    )
}

export default Contact