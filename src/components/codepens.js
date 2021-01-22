import React from "react";

function Codepens() {
	return (
		<div className="home-codepens-container secondary-background">
			<iframe
				className="neumorphic"
				height="80%"
				width="60%"
				scrolling="no"
				title="Fireflies floating and shining"
				src="https://codepen.io/Karenamicone/embed/KKPEwJO?height=265&theme-id=light&default-tab=js,result"
				frameborder="no"
				loading="lazy"
				allowtransparency="true"
				allowfullscreen="true"
			>
				See the Pen{" "}
				<a href="https://codepen.io/Karenamicone/pen/KKPEwJO">
					Fireflies floating and shining
				</a>{" "}
				by Karen Amicone (
				<a href="https://codepen.io/Karenamicone">@Karenamicone</a>) on{" "}
				<a href="https://codepen.io">CodePen</a>.
			</iframe>
			<a
				className="neumorphic button"
				href="https://codepen.io/Karenamicone"
				target="_blank"
			>
				Ver más en Codepen
			</a>
		</div>
	);
}

export default Codepens;
