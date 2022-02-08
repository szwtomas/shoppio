import React from "react";
import "./cartWidget.css";

const CartWidget = ({ itemCount = 0 }) => {
	return (
		<div className="cart-widget">
			<i className="fas fa-shopping-cart cart-icon"></i>
			<span>{itemCount}</span>
		</div>
	);
};

export default CartWidget;
