import React from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const projects = [
    {
        title: "your-md-links",
        img: "",
        description: "Is a npm package that reads Markdown files to identify its links, count them and verify their response status." ,
        repo: "https://github.com/KarenAmicone/CDMX007-fe-md-links",
        demo: "https://www.npmjs.com/package/your-md-links",
        tools: []
    },
    {
        title: "your-md-links",
        img: "",
        description:,
        repo:,
        demo:,
        tools: []
    }
]

const Work = () => {
    return(
        <article className="work">
            
            <article className="logos">
                <img src={github}  alt="github"></img>
                <img src={instagram}  alt="instagram"></img>
                <img src={linkedin}  alt="linkedin"></img>
            </article>

            </article>
    )
}

export default Work