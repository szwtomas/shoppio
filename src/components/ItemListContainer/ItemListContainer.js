import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoryId } from "../../assets/products";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		if (categoryId === undefined) {
			// List every product
			getProducts()
				.then(products => setProducts(products))
				.catch(err => console.log(err));
		} else {
			// Only list products that math category id (filter)
			getProductsByCategoryId(parseInt(categoryId))
				.then(products => setProducts(products))
				.catch(err => console.log(err));
		}
	}, [categoryId]);

	return (
		<div className="item-list-container">
			<ItemList productList={products} />
		</div>
	);
};

export default ItemListContainer;
