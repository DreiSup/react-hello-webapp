import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light m-4">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact list by drei</span>
				</Link>
				<div className="ml-auto" id="boton">
					<Link to="/demo">
						<button className="btn btn-primary">Add new contact</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
