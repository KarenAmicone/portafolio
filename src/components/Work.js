import React from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'
import css from '../assets/css5.png'
import node from '../assets/nodejs.png'
import html from '../assets/html5.png'
import js from '../assets/js.png'
import npm from '../assets/npm.png'

const projects = [
    {
        title: "your-md-links",
        img: "https://github.com/KarenAmicone/portafolio/blob/master/src/assets/mdlinks.png?raw=true",
        description: "Is a npm package that reads Markdown files to identify its links, count them and verify their response status." ,
        repo: "https://github.com/KarenAmicone/CDMX007-fe-md-links",
        demo: "https://www.npmjs.com/package/your-md-links",
        tools: [{node}, {git}, {github}, {npm}]
    }
]

const Work = () => {
    return(
        <article className="work">
            {projects.map(project =>(
                <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={project.img}></img>
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{project.title}<i class="material-icons right">more_vert</i></span>
                <p><a href={project.repo}>Repository</a></p>
                <p><a href={project.demo}>Demo</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{project.title}<i class="material-icons right">close</i></span>
                <p>{project.description}</p>
                {project.tools.map(tool=>(
                    <img src={tool.dir} alt={tool.name}></img>
                ))}
                </div>
            </div>
            ))}

            <article className="logos">
                <img src={github}  alt="github"></img>
                <img src={instagram}  alt="instagram"></img>
                <img src={linkedin}  alt="linkedin"></img>
            </article>

            </article>
    )
}

export default Work