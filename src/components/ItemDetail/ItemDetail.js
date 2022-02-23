import React, { useState } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
	const [itemsInCart, setItemsInCart] = useState(0);

	const handleAddToCart = count => {
		setItemsInCart(count);
	};

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
							<p className="item-detail--price">
								${item.price} USD
							</p>
							<p className="item-detail--type">{item.typr}</p>
							<p className="item-detail--color">{item.color}</p>
						</div>
						<p className="item-detail--description">
							{item.description}
						</p>
						<div className="item-detail--count">
							{itemsInCart === 0 ? (
								<ItemCount onAdd={handleAddToCart} />
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
