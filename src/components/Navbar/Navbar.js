import React, { useState, useEffect } from "react";
import CartWidget from "../CartWidget";
import "./navbar.css";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [showBarsNavbar, setShowBarsNavbar] = useState(false);

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => window.removeEventListener("resize", changeWidth);
	}, []);

	const toggleNavbar = () => {
		setShowBarsNavbar(!showBarsNavbar);
	};

	useEffect(() => {
		if (screenWidth >= 690) {
			setShowBarsNavbar(false);
		}
	}, [screenWidth, setScreenWidth]);

	return (
		<div className="navbar-container">
			<nav className={!showBarsNavbar ? "navbar" : "navbar navbar-bars"}>
				<div
					className={
						!showBarsNavbar
							? "navbar--brand"
							: "navbar--brand brand-open"
					}
				>
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

				{!showBarsNavbar && (
					<button className="navbar--bars" onClick={toggleNavbar}>
						<i className="fas fa-bars"></i>
					</button>
				)}
				{showBarsNavbar && (
					<button
						className="navbar--close-btn"
						onClick={toggleNavbar}
					>
						<i className="far fa-times"></i>
					</button>
				)}
				{showBarsNavbar && (
					<div className="navbar--menu-container">
						<ul className="navbar--menu">
							<li>Featured</li>
							<li>Notebooks</li>
							<li>Tablets</li>
							<li>Cell Phones</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
