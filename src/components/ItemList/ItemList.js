import React from "react";
import "./itemList.css";
import Item from "../Item";
// import { getProducts } from "../../assets/products";

const ItemList = props => {
	const { productList } = props;

	return (
		<div className="item-list">
			{productList.map(p => (
				<div className="item-list--item" key={p.id}>
					<Item
						title={p.title}
						price={p.price}
						imgUrl={p.imgUrl}
						key={p.id}
						id={p.id}
					/>
				</div>
			))}
		</div>
	);
};

export default ItemList;
