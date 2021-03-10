import React from "react";

const About = () => {
	return (
		<section className="about-container">
			<div className="about-me">
				<h1 className="section-title">
					Mi carrera como desarrolladora empezó en 2019
				</h1>
				<p className="about-me-subtitle">
					Aprendí desarrollo frontend en Laboratoria, donde obtuve este diploma
				</p>
				<img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/19408740"></img>
				<p>
					Fueron seis meses intensivos en los que aprendí con proyectos reales
					trabajando con la metodología Agile. Desarrollé con HTML, CSS,
					Javascript, React, Redux, Firebase, React Native, Node JS, integración
					de APIs e hice un paquete de NPM.
				</p>
				<p>
					Desde que salí del bootcamp he trabajado en startups, desarrollando
					con Javascript y Flutter.
				</p>
				<p>
					Ahora trabajo con un partner de Facebook donde desarrollo soluciones
					para que las empresas puedan integrar el Píxel y las APIs de
					Conversiones de Facebook en sus sistemas. Cuento con la certificación
					Marketing Developer y Advertising API Developer de Facebook.
				</p>
				<p>
					Quiero crear interfaces y sistemas geniales que las personas puedan
					usar con facilidad y que les encante navegar.
				</p>
				<p>
					Para conocer con más detalle mi experiencia laboral, puedes ver mi
					perfil en{" "}
					<a
						href="https://www.linkedin.com/in/karen-amicone/"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Linked In
					</a>
				</p>
			</div>
		</section>
	);
};

export default About;
