import React from "react";

const ItemListContainer = ({ greeting = "Hello World" }) => {
	const styles = {
		fontSize: "42px",
		textAlign: "center",
	};

	return (
		<div className="item-list-container" style={styles}>
			<h1>{greeting}</h1>
		</div>
	);
};

export default ItemListContainer;
