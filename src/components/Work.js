import React from 'react'
import projects from '../projects.json'
import github from '../assets/github.png'

const Work = () => {
    return(
        <section className="work">
        <article className="intro-work">
            <h3>Recent Work</h3>
            <p>To see all my work, click here: </p>
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
                <h5>Main tools</h5>
                <div className="project__tools">
                  {project.tools.map(tool=>(
                    <img src={tool}></img>
                  ))}
                </div>
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