import React from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Work = () => {
    return(
        
        <article className="contact">
            <h1>Shalala</h1>
                <h3>
                    Contact
                </h3>
                <article className="logos">
                    <img src={github}  alt="github"></img>
                    <img src={instagram}  alt="instagram"></img>
                    <img src={linkedin}  alt="linkedin"></img>
                </article>

            </article>
    )
}

export default Work