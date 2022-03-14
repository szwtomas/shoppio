import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { addOrder, getTimestamp, updateStock } from "../../service/firestore";
import CheckoutForm from "../CheckoutForm";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const { cart, getTotal, clearCart } = useContext(CartContext);
	let navigate = useNavigate();

	const getOrder = (name, phone, address) => {
		const order = {
			buyer: {
				name: name,
				phone: phone,
				address: address,
			},
			items: cart.map(item => {
				return {
					id: item.id,
					price: item.price,
					quantity: item.quantity,
					title: item.name,
				};
			}),
			total: getTotal(),
			date: getTimestamp(),
		};

		return order;
	};

	const confirmOrder = async (name, phone, address) => {
		const order = getOrder(name, phone, address);
		if (!order) return;

		try {
			const orderId = await addOrder(order);
			cart.forEach(async item => {
				await updateStock(item.id, item.stock - item.quantity);
			});
			clearCart();
			navigate(`/${orderId}/ordercompleted`);
		} catch (err) {
			console.error(err);
			alert(err);
			return;
		}
	};

	return <CheckoutForm handleSubmit={confirmOrder} />;
};

export default Checkout;
