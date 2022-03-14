import React from "react";
import { Link, useParams } from "react-router-dom";
import "./orderCompleted.css";

const OrderCompleted = () => {
	const { orderId } = useParams();

	return (
		<>
			<div className="container">
				<h2 className="title">Order Completed</h2>
				<Link to="/" className="redirect">
					Continue Shopping
				</Link>
			</div>
			<div className="order-id">
				<b>Order Number: {orderId}</b>
			</div>
		</>
	);
};

export default OrderCompleted;
