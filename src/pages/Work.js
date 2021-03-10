import React from "react";
import projects from "../projects.json";

const Work = () => {
	return (
		<section className="work">
			<article className="intro-work">
				<h1 className="section-title">Proyectos personales</h1>
				<p>
					Estos son algunos de los proyectos en los que he trabajando desde que
					comencé a desarrollar y con los que he aprendido a aplicar diferentes
					herramientas de desarrollo.
				</p>
			</article>
			<div className="container secondary-background">
				{projects.map((project) => (
					<div className="project neumorphic" key={project.title}>
						<div className="project__image">
							<img src={project.img} alt={project.title} id={project.id}></img>
						</div>
						<div className="project__container">
							<div className="project__title">
								<h3 className="project__name">{project.title}</h3>
							</div>
							<p className="project__bio">{project.description}</p>
							{/* <h5>Main tools</h5>
							<br></br>
							<div className="project__tools">
								{project.tools.map((tool) => (
									<img alt={tool} src={tool}></img>
								))}
							</div> */}
							<div className="project__foot">
								<a
									className="link"
									target="_blank"
									rel="noopener noreferrer"
									href={project.repo}
								>
									Github repository
								</a>
								<br></br>
								<a
									className="link"
									target="_blank"
									rel="noopener noreferrer"
									href={project.demo}
								>
									Demo
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Work;
