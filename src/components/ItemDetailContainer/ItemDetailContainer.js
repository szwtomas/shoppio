import React, { useEffect, useState } from "react";
import { getProductById } from "../../assets/products";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = ({ id }) => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProductById(id)
			.then(product => setProduct([product]))
			.catch(err => console.log(err));
	}, [id]);

	return (
		<div className="item-detail--container">
			<div className="elements">
				{product !== null &&
					product.map(product => (
						<ItemDetail item={product} key={product.id} />
					))}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
