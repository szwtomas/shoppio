import React, { useState, useContext } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item }) => {
	const [itemsInCart, setItemsInCart] = useState(0);

	const { cart, addItem } = useContext(CartContext);

	const handleAddToCart = count => {
		if (count === 0) return;
		setItemsInCart(count);
		addItem({
			id: item.id,
			name: item.title,
			price: item.price,
			quantity: count,
			imgUrl: item.imgUrl,
			stock: item.stock,
		});
	};

	const itemInCart = cart.find(cartItem => cartItem.id === item.id);
	console.log(itemInCart);
	const remainingStock = itemInCart
		? item.stock - itemInCart.quantity
		: item.stock;
	console.log(remainingStock);

	return (
		<div className="item-detail-container">
			<div className="item-details">
				<div className="item-details--img-container">
					<img
						className="item-detail--img"
						src={item.imgUrl}
						alt={item.title}
					/>
				</div>
				<div className="item-detail--content">
					<h4 className="item-detail--title">{item.title}</h4>
					<div className="item-detail--info">
						<div className="item-detail--features">
							<p className="item-detail--price">${item.price} USD</p>
							<p className="item-detail--type">{item.typr}</p>
							<p className="item-detail--color">{item.color}</p>
						</div>
						<p className="item-detail--description">{item.description}</p>
						<div className="item-detail--count">
							{itemsInCart === 0 ? (
								<ItemCount onAdd={handleAddToCart} stock={remainingStock} />
							) : (
								<Link to="/cart" className="cart-link">
									Go to Cart
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
