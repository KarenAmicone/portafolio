import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import { Link, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<nav className="navbar">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/about">Sobre mí</Link>
					</li>
					<li>
						<Link to="/work">Proyectos</Link>
					</li>
					<li>
						<Link to="/contact">Contacto</Link>
					</li>
				</ul>
			</nav>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/work" component={Work} />
			<Route path="/contact" component={Contact} />
		</div>
	);
}

export default App;
