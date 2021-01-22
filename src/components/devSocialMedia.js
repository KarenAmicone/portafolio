import React from "react";

function DevSocialMedia() {
	return (
		<div className="dev-social-media">
			<h2>Redes</h2>
			<div className="social-media-container">
				<a
					className="social-media-icon"
					href="https://github.com/KarenAmicone"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/simple-icons/simple-icons/60847890d2cea37fc4418ca3d426fa894c10369e/icons/github.svg"
						alt="Github icon"
					></img>
				</a>
				<a
					className="social-media-icon"
					href="https://gitlab.com/KarenAmicone"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/simple-icons/simple-icons/60847890d2cea37fc4418ca3d426fa894c10369e/icons/gitlab.svg"
						alt="Gitlab icon"
					></img>
				</a>
				<a
					className="social-media-icon"
					href="https://www.linkedin.com/in/karen-amicone/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/simple-icons/simple-icons/60847890d2cea37fc4418ca3d426fa894c10369e/icons/linkedin.svg"
						alt="Linked In icon"
					></img>
				</a>
			</div>
		</div>
	);
}

export default DevSocialMedia;
