import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount";

const ItemDetail = props => {
	const {
		item = {
			title: "Product title",
			imgUrl: "#",
			price: 1000,
			type: "Cell Phone",
			color: "white",
			description: "Item description",
		},
	} = props;

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
							<ItemCount />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
