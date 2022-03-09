import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState(null);
	const { productId } = useParams();

	useEffect(() => {
		setLoading(true);
		const docRef = doc(db, "Products", productId);
		getDoc(docRef)
			.then(res => {
				const prod = { id: res.id, ...res.data() };
				setProduct([prod]);
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
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
