import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";

const ItemListContainer = () => {
	const styles = {
		fontSize: "42px",
		textAlign: "center",
	};

	return (
		<div className="item-list-container" style={styles}>
			<ItemList />
		</div>
	);
};

export default ItemListContainer;
