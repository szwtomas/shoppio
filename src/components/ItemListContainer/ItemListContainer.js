import React from "react";
import "./itemListContainer.css";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const ItemListContainer = ({ greeting = "Hello World" }) => {
	const styles = {
		fontSize: "42px",
		textAlign: "center",
	};

	return (
		<div className="item-list-container" style={styles}>
			<h1>{greeting}</h1>

			<ItemCount
				initial={1}
				stock={5}
				onAdd={() => console.log("Add to cart")}
			/>

			<ItemList />
		</div>
	);
};

export default ItemListContainer;
