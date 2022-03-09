import React, { useState, useContext } from "react";
import "./checkout.css";
import CartContext from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const { cart, getTotal, clearCart } = useContext(CartContext);

	const [nameInput, setNameInput] = useState("");
	const [phoneInput, setPhoneInput] = useState("");
	const [addressInput, setAddressInput] = useState("");
	let navigate = useNavigate();

	const handleNameChange = evt => {
		setNameInput(evt.target.value);
	};

	const handlePhoneChange = evt => {
		setPhoneInput(evt.target.value);
	};

	const handleAddressChange = evt => {
		setAddressInput(evt.target.value);
	};

	const isValidInput = order => {
		return (
			order.buyer.name !== "" &&
			order.buyer.phone !== "" &&
			order.buyer.address !== ""
		);
	};

	const getOrder = () => {
		const order = {
			buyer: {
				name: nameInput,
				phone: phoneInput,
				address: addressInput,
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
			date: new Date(),
		};
		if (!isValidInput(order)) {
			alert("All fields must be completed");
			return;
		}
		return order;
	};

	const confirmOrder = async () => {
		const order = getOrder();
		if (!order) return;

		try {
			await addDoc(collection(db, "Orders"), order);
			cart.forEach(async item => {
				await updateDoc(doc(db, "Products", item.id), {
					stock: item.stock - item.quantity,
				});
			});
			clearCart();
			navigate("/ordercompleted");
		} catch (err) {
			console.error(err);
			alert(err);
			return;
		}
	};

	return (
		<div className="form">
			<div className="input-container">
				<label htmlFor="name">
					Full name: <span className="mandatory"> *</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="e.g: Tomas Szwarcberg"
					value={nameInput}
					onChange={handleNameChange}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="phone">
					Phone number<span className="mandatory"> *</span>
				</label>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="e.g: 11 26352599"
					value={phoneInput}
					onChange={handlePhoneChange}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="address">
					Address<span className="mandatory"> *</span>
				</label>
				<input
					type="text"
					id="address"
					name="address"
					placeholder="e.g: Cabildo 2621"
					value={addressInput}
					onChange={handleAddressChange}
				/>
			</div>
			<button className="submit-btn" onClick={confirmOrder}>
				Confirm
			</button>
		</div>
	);
};

export default Checkout;
