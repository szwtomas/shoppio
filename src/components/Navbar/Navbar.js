import React, { useState, useEffect, useContext } from "react";
import CartWidget from "../CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [showBarsNavbar, setShowBarsNavbar] = useState(false);

	const { cartSize } = useContext(CartContext);

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
					<Link to="/" className="navbar--brand">
						<i className="fas fa-shopping-bag navbar--icon"></i>
						<h2 className="navbar--title">Shoppio</h2>
					</Link>
				</div>
				<div className="navbar--categories">
					<Link className="navbar--category" to="/category/0">
						Cell Phones
					</Link>
					<Link className="navbar--category" to="/category/1">
						Notebooks
					</Link>
					<Link className="navbar--category" to="/category/2">
						Tablets
					</Link>
				</div>
				<Link to="/cart" className="navbar--cart-link">
					<CartWidget className="navbar--cart" itemCount={cartSize} />
				</Link>

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
							<li>
								<Link
									className="navbar--category"
									to="category/1"
								>
									Notebooks
								</Link>
							</li>
							<li>
								<Link
									className="navbar--category"
									to="category/0"
								>
									Cell Phones
								</Link>
							</li>
							<li>
								<Link
									className="navbar--category"
									to="category/2"
								>
									Tablets
								</Link>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
