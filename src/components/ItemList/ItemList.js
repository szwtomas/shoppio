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

	return (
		<div className="item-list">
			{products.map(p => (
				<div className="item-list--item">
					<Item
						title={p.title}
						price={p.price}
						imgUrl={p.imgUrl}
						key={p.id}
					/>
				</div>
			))}
		</div>
	);
};

export default ItemList;
