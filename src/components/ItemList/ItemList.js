import React from "react";
import "./itemList.css";
import Item from "../Item";
import { products } from "../../assets/products";

const ItemList = () => {
	const getItemElements = () => {
		return products.map(p => (
			<Item title={p.title} price={p.price} imgUrl={p.imgUrl} />
		));
	};

	return <div className="item-list">{getItemElements()}</div>;
};

export default ItemList;
