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
            <a href="https://github.com/KarenAmicone"><img src={github} alt="github" id="social-media"></img> Github</a>
        </article>
       
        {projects.map(project=>(
            <div class="contenedor">
            <div class="explorador">
              <div class="explorador__imagen">
                  <img src={project.img} alt=''></img>
                
              </div>
              <div class="explorador__contenido">
                <div class="explorador__cabecera">
                  <h3 class="explorador__nombre">{project.title}</h3>
                </div>
                <p class="explorador__bio">
                  {project.description}
                </p>
                <p class="explorador__bio">
                  Tools: {project.tools}
                </p>
                <div class="explorador__pie">
                    <a href={project.repo}>Github repository</a>
                    <br></br>
                    <a href={project.demo}>Demo</a>
                </div>
              </div>
            </div>
            </div>
        ))}
  
        </section>
    )
}

export default Work