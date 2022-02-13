import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList";
import ItemDetail from "../ItemDetail";

const ItemListContainer = () => {
	const styles = {
		fontSize: "42px",
		textAlign: "center",
	};

	const item = {
		title: "IPhone X",
		description: "IPhone X model 2021, top cellphone",
		price: 1000,
		imgUrl: "https://www.isolutionsperu.com/wp-content/uploads/iphone-x.jpg",
		type: "Cell Phone",
		color: "White",
	};

	return (
		<div className="item-list-container" style={styles}>
			<ItemList />
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemListContainer;
