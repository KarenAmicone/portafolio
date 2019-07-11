import React from 'react'
import projects from '../projects.json'
import github from '../assets/github.png'
import { Carousel } from "react-responsive-carousel";

const Work = () => {
    return(
        <section className="work">
        <article className="intro-work">
            <h2>Recent Work</h2>
            <br></br>
            <p>The following are the most important projects in which I've been working in.</p>
            <p>If you want to see all my work, click here: </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/KarenAmicone"><img src={github} alt="github" id="social-media"></img> Github</a>
        </article>
        <div className="container">
        {projects.map(project=>(
            <div className="project" key={project.title}>
              <div className="project__image">
                  <img src={project.img} alt={project.title}></img>
              </div>
              <div className="project__container">
                <div className="project__title">
                  <h3 className="project__name">{project.title}</h3>
                </div>
                <p className="project__bio">
                  {project.description}
                </p>
                <p className="project__bio">
                  Tools: {project.tools}
                </p>
                <div className="project__foot">
                    <a target="_blank" rel="noopener noreferrer" href={project.repo}>Github repository</a>
                    <br></br>
                    <a target="_blank" rel="noopener noreferrer" href={project.demo}>Demo</a>
                </div>
              </div>
            </div>
        ))}
          </div>
        </section>
    )
}

export default Work