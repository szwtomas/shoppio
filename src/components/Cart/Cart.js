import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../service/firebase";
import "./cart.css";

const CartItem = ({ name, count, id, handleClick, url, price }) => {
	return (
		<div className="cart-item">
			<div className="img-contianer">
				<img src={url} alt={name} className="cart-item--img" />
				<span>{name}</span>
			</div>
			<span className="item-price">{`$${price}`}</span>
			<div className="count-container">
				<span className="item-count">{count}</span>
				<FaTrashAlt
					className="item--delete-icon"
					onClick={() => handleClick(id)}
				/>
			</div>
		</div>
	);
};

// { id, name, price, quantity }
const Cart = () => {
	const { cart, cartSize, removeItem, getTotal } = useContext(CartContext);
	const [itemDeleted, setItemDeleted] = useState(false);
	let navigate = useNavigate();

	const total = getTotal();

	const handleConfirmClick = () => {
		navigate("/checkout");
	};

	const deleteItem = id => {
		removeItem(id);
		setItemDeleted(!itemDeleted);
	};

	if (cartSize === 0) {
		return (
			<div className="cart-empty">
				<span className="cart-empty--header">Your cart is empty!</span>
				<Link to="/" className="cart-empty--link">
					Go to home page
				</Link>
			</div>
		);
	}

	return (
		<>
			<div className="cart-items-container">
				<h2
					style={{ textAlign: "center", fontSize: "38px", marginTop: "16px" }}
				>
					My Cart
				</h2>
				<div className="cart-items">
					{cart.map(item => {
						return (
							<CartItem
								key={item.id}
								id={item.id}
								name={item.name}
								count={item.quantity}
								url={item.imgUrl}
								handleClick={deleteItem}
								price={item.price}
							/>
						);
					})}
				</div>
				<hr className="line" />
				<div className="total-price">
					<span>Total</span>
					<span>{`$${total}`}</span>
				</div>
			</div>
			<div className="confirm-container">
				<button className="confirm-btn" onClick={handleConfirmClick}>
					Proceed to Checkout
				</button>
			</div>
		</>
	);
};

export default Cart;
