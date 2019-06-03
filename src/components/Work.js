import React from 'react'
import projects from '../projects.json'

const Work = () => {
    return(
        <section className="work">
        <article className="intro-work">
            <h2>Recent Work</h2>
            <br></br>
            <p>The last months I studied at Laboratoria, where I made these awesome projects</p>
            <a href="https://github.com/KarenAmicone">Check all my work on Github</a>
        </article>
        <article className="work-container">
            {projects.map(project=>(
                <article className="card" key={project.title}>
                <figure className="mockup">
                    <img src={project.img}></img>
                </figure>
                <article className="card-content">
                    <h2>{project.title}</h2>
                    <br></br>
                    <p>{project.description}</p>
                </article>
                
                <article className="card-link">
                
                    <a className="link" href={project.repo}>Repository</a>
                    <a className="link" href={project.demo}>Demo</a>
                </article>
                {<article className="tools">
                    <h2>Tools</h2>
                    <p>{project.tools}</p>
                </article>}
            </article>
            ))}
        </article>
        </section>
    )
}

export default Work