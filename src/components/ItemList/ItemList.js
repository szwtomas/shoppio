import React, { useState, useEffect } from "react";
import "./itemList.css";
import Item from "../Item";
import { getProducts } from "../../assets/products";

const ItemList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then(products => setProducts(products))
			.catch(() => console.log("Error fetching products"));
	}, []);

	const getItemElements = () => {
		return products.map(p => (
			<Item
				title={p.title}
				price={p.price}
				imgUrl={p.imgUrl}
				key={p.id}
			/>
		));
	};

	return <div className="item-list">{getItemElements()}</div>;
};

export default ItemList;
