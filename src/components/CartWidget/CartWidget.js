import React from "react";
import "./cartWidget.css";

const CartWidget = ({ itemCount = 0 }) => {
	return (
		<div
			className="cart-widget"
			style={{ display: itemCount === 0 ? "none" : null }}
		>
			<i className="fas fa-shopping-cart cart-icon"></i>
			<span>{itemCount}</span>
		</div>
	);
};

export default CartWidget;
