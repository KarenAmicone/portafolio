import React from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import projects from '../projects.json'

const Work = () => {
    return(
        <article className="work">
            {projects.map(project =>(
                <div className="card" key={project.title}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={project.img}></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{project.title}<i className="material-icons right">more_vert</i></span>
                        <p><a href={project.repo}>Repository</a></p>
                        <p><a href={project.demo}>Demo</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{project.title}<i className="material-icons right">close</i></span>
                        <p>{project.description}</p>
                        <p className="card-title grey-text text-darken-4">Tools</p>
                        <article className="tools-container">
                        {project.tools.map(tool=>(
                            <img src={tool.href} alt={tool.name} key={tool.name} className="tool"></img>
                        ))}
                        </article>
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