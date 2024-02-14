import React from "react";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Articles from "./Components/Articles/Article";

export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Blog />
			<Articles />
		</div>
	);
}
