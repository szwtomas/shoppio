import React from "react";
import CartWidget from "../CartWidget";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<nav className="navbar">
				<div className="navbar--brand">
					<i className="fas fa-shopping-bag navbar--icon"></i>
					<h2 className="navbar--title">Shoppio</h2>
				</div>

				<div className="navbar--categories">
					<button className="navbar--category">Featured</button>
					<button className="navbar--category">Notebooks</button>
					<button className="navbar--category">Tablets</button>
					<button className="navbar--category">Cell Phones</button>
				</div>

				<CartWidget className="navbar--cart" itemCount={0} />

				<button className="navbar--bars">
					<i className="fas fa-bars"></i>
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
