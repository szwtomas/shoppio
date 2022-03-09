import React from "react";
import { Link } from "react-router-dom";
import "./orderCompleted.css";

const OrderCompleted = () => {
	return (
		<div className="container">
			<h2 className="title">Order Completed</h2>
			<Link to="/" className="redirect">
				Continue Shopping
			</Link>
		</div>
	);
};

export default OrderCompleted;
