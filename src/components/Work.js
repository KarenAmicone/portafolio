import React from 'react'
import projects from '../projects.json'

const Work = () => {
    return(
        <section className="work-container">
            {projects.map(project=>(
                <article className="card" key={project.title}>
                <figure className="mockup">
                    <img src={project.img}></img>
                </figure>
                <article className="card-content">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </article>
                <article className="card-link">
                    <a className="link" href={project.repo}>Repository</a>
                    <a className="link" href={project.demo}>Demo</a>
                </article>
                {/* <article className="tools">
                    <h3>Tools</h3>
                        {project.tools.map(tool=>(
                            <img src={tool.href} alt={tool.name}></img>
                        ))}
                </article> */}
            </article>
            ))}
        </section>
    )
}

export default Work