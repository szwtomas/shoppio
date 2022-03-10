import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getProductById } from "../../service/firestore";

const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState(null);
	const { productId } = useParams();

	useEffect(() => {
		setLoading(true);
		const req = async id => {
			try {
				const prod = await getProductById(id);
				setProduct([prod]);
			} catch (err) {
				console.error("Firebase error:", err);
			}
		};
		req(productId);
		setLoading(false);
	}, [productId]);

	if (loading) {
		return (
			<h2 style={{ fontSize: "42px", textAlign: "center", marginTop: "20px" }}>
				Loading...
			</h2>
		);
	}

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
