import React from "react";
import "./item.css";

const Item = props => {
	const { title, price, imgUrl } = props;

	return (
		<div className="item">
			<h4 className="item--title">{title}</h4>
			<img className="item--img" alt={title} src={imgUrl} />
			<span className="item--price">${price} U$D</span>
			<button className="item--details-btn">View details</button>
		</div>
	);
};

export default Item;
