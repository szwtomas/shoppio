import React from "react";
import "./index.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<nav className="navbar">
				<div className="navbar--brand">
					<i className="fas fa-shopping-bag navbar--icon"></i>
					<h2 className="navbar--title">Shoppio</h2>
				</div>

				<div className="navbar--categories">
					<button className="navbar--category">Notebooks</button>
					<button className="navbar--category">Celulares</button>
					<button className="navbar--category">Televisores</button>
				</div>

				<div className="navbar--search-login">
					<i className="fas fa-search navbar--search-icon"></i>
					<button className="navbar--login-btn">Login</button>
				</div>
				<button className="navbar--bars">
					<i className="fas fa-bars"></i>
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
