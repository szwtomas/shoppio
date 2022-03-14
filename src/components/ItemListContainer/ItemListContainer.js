import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../../service/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const { category } = useParams();

	useEffect(() => {
		setLoading(true);
		const req = async categoryParam => {
			try {
				let prods = await getProductsByCategory(categoryParam);
				setProducts(prods);
			} catch (err) {
				console.error(err);
			}
		};
		req(category);
		setLoading(false);
	}, [category]);

	if (loading) {
		return (
			<h2 style={{ fontSize: "42px", textAlign: "center", marginTop: "20px" }}>
				Loading...
			</h2>
		);
	}

	return (
		<div className="item-list-container">
			<ItemList productList={products} />
		</div>
	);
};

export default ItemListContainer;
