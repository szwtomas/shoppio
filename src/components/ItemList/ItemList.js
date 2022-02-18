import React from "react";
import "./itemList.css";
import Item from "../Item";

const ItemList = ({ productList }) => {
	return (
		<div className="item-list">
			{productList.map(p => (
				<div className="item-list--item" key={p.id}>
					<Item key={p.id} {...p} />
				</div>
			))}
		</div>
	);
};

export default ItemList;
