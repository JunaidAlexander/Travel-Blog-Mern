import React from "react";
import video from "../videos/bg.mp4";
import "./Home.css"; // Assuming you have a CSS file for styling

export default function Home() {
	return (
		<>
		<div className="bg-video-container">
			<video className="bg-video" autoPlay loop muted>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<div className="heading-text">
			<h1>Experience</h1>
		</div>
		</> 
	);
}
