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
            <a target="_blank" href="https://github.com/KarenAmicone"><img src={github} alt="github" id="social-media"></img> Github</a>
        </article>
        <div class="container">
        {projects.map(project=>(
            <div class="project">
              <div class="project__image">
                  <img src={project.img} alt=''></img>
              </div>
              <div class="project__container">
                <div class="project__title">
                  <h3 class="project__name">{project.title}</h3>
                </div>
                <p class="project__bio">
                  {project.description}
                </p>
                <p class="project__bio">
                  Tools: {project.tools}
                </p>
                <div class="project__foot">
                    <a target="_blank" href={project.repo}>Github repository</a>
                    <br></br>
                    <a target="_blank" href={project.demo}>Demo</a>
                </div>
              </div>
            </div>
        ))}
          </div>
        </section>
    )
}

export default Work