import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../assets/products";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	const { productId } = useParams();

	useEffect(() => {
		getProductById(productId)
			.then(product => setProduct([product]))
			.catch(err => console.log(err));
	}, [productId]);

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
