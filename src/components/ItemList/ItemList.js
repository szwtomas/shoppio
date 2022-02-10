import React from "react";
import "./itemList.css";
import Item from "../Item";

const ItemList = () => {
	return (
		<div className="item-list">
			<Item
				title="IPhone X"
				price={1500}
				imgUrl={
					"https://www.isolutionsperu.com/wp-content/uploads/iphone-x.jpg"
				}
			/>
		</div>
	);
};

export default ItemList;
