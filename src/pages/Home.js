import React from "react";
import Codepens from "../components/codepens";
import DevSocialMedia from "../components/devSocialMedia";
import Karen from "../assets/Amicone-06.jpg";

function Home() {
	return (
		<section className="home">
			<div className="home-hero-container">
				<h1 className="fade-in">Web Developer</h1>
				<p className="fade-in">Karen Amicone</p>
			</div>
			<div className="no-pointer-events"></div>
			<div className="scrollable">
				<div className="home-welcome-container">
					<div className="photo">
						<img src={Karen} alt="karen" className="karen"></img>
					</div>
					<p>
						¡Hola! Mi nombre es Karen y soy desarrolladora. Tengo experiencia en
						desarrollo web, desarrollo móvil (híbrido) y cuento con la
						certificación Marketing Developer de Facebook.
					</p>

					<p>¿Te interesa trabajar conmigo? Escríbeme:</p>
					<a href="mailto:karen_amicone@hotmail.com">
						<img
							className="email-svg"
							src="https://image.flaticon.com/icons/png/512/95/95645.png"
							alt="Email icon"
						></img>
						karen_amicone@hotmail.com
					</a>
				</div>
				<div className="home-subtitle secondary-background">
					<h2>Echa un vistazo a mis creaciones en Codepen</h2>
				</div>

				<Codepens />
				<DevSocialMedia />
			</div>
		</section>
	);
}

export default Home;
