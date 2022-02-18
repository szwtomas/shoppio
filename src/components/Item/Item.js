import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ title, price, imgUrl, id }) => {
	return (
		<div className="item">
			<h4 className="item--title">{title}</h4>
			<img className="item--img" alt={title} src={imgUrl} />
			<span className="item--price">${price} U$D</span>
			<Link to={`/detail/${id}`}>
				<button className="item--details-btn">View details</button>
			</Link>
		</div>
	);
};

export default Item;
