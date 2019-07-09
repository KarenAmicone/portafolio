import React from "react";
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
