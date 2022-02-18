import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoryId } from "../../assets/products";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	const req = id => {
		if (!id) {
			// List all the products
			getProducts()
				.then(products => setProducts(products))
				.catch(err => console.log(err));
			return;
		}
		// List only products with matching category
		getProductsByCategoryId(+id)
			.then(products => setProducts(products))
			.catch(err => console.error(err));
	};

	useEffect(() => req(categoryId), [categoryId]);

	return (
		<div className="item-list-container">
			<ItemList productList={products} />
		</div>
	);
};

export default ItemListContainer;
