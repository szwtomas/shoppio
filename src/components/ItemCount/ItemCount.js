import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
	const [count, setCount] = useState(initial);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	if (stock === 0) {
		return (
			<span style={{ fontSize: "28px", textAlign: "center", color: "red" }}>
				Out of Stock!
			</span>
		);
	}

	return (
		<div className="item-count">
			<div className="amount-wrapper">
				<button className="count-btn decrement" onClick={decrement}>
					-
				</button>
				<span className="item-amount">{count}</span>
				<button className="count-btn" onClick={increment}>
					+
				</button>
			</div>
			<button className="add-to-cart-btn" onClick={() => onAdd(count)}>
				Add to cart
			</button>
		</div>
	);
};

export default ItemCount;
