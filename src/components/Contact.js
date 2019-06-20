import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
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
                <img src={github} alt="github" id="social-media"></img><a href="https://github.com/KarenAmicone">KarenAmicone</a>
            </article>
            <article className="LI-profile-badge" id="linkedin"  data-version="v1" data-size="medium" data-locale="es_ES" data-type="vertical" data-theme="dark" data-vanity="karen-amicone">
                <a className="LI-simple-link" target="_blank" href='https://mx.linkedin.com/in/karen-amicone?trk=profile-badge'></a>
            </article>
            </article>
    </section>
    </ScrollableAnchor>
    )
}

export default Contact