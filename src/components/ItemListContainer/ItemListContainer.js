import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		// If category id isn't in params, fetch all products
		// If exists, filter by category Id
		const productCollecctionRef =
			category === undefined
				? collection(db, "Products")
				: query(collection(db, "Products"), where("category", "==", category));

		getDocs(productCollecctionRef)
			.then(querySnapshot => {
				const prods = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				setProducts(prods);
			})
			.catch(err => console.error(err));
	}, [category]);

	return (
		<div className="item-list-container">
			<ItemList productList={products} />
		</div>
	);
};

export default ItemListContainer;
