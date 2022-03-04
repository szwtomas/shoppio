import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../assets/products";
import ItemDetail from "../ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);
	const { productId } = useParams();

	useEffect(() => {
		const docRef = doc(db, "Products", productId);
		getDoc(docRef)
			.then(res => {
				const prod = { id: res.id, ...res.data() };
				setProduct([prod]);
			})
			.catch(err => console.error(err));
	}, [productId]);

	// const productRequest = id => {
	// 	getProductById(+id)
	// 		.then(product => setProduct([product]))
	// 		.catch(err => console.log(err));
	// };

	// useEffect(() => productRequest(productId), [productId]);

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
