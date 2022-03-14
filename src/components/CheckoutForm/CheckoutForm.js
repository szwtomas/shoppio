import React, { useState } from "react";
import "./checkoutForm.css";
import { isNumber } from "../../helpers/validation";

const CheckoutForm = ({ handleSubmit }) => {
	const [nameInput, setNameInput] = useState("");
	const [phoneInput, setPhoneInput] = useState("");
	const [addressInput, setAddressInput] = useState("");

	const handleNameChange = evt => {
		setNameInput(evt.target.value);
	};

	const handlePhoneChange = evt => {
		const newInput = evt.target.value;
		if (!isNumber(newInput) && newInput !== "") return;
		setPhoneInput(evt.target.value);
	};

	const handleAddressChange = evt => {
		setAddressInput(evt.target.value);
	};

	const isValidInput = () => {
		return nameInput !== "" && phoneInput !== "" && addressInput !== "";
	};

	const _handleSubmit = () => {
		if (isValidInput()) {
			handleSubmit(nameInput, phoneInput, addressInput);
		} else {
			alert("All fields must be completed!");
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
			<button className="submit-btn" onClick={_handleSubmit}>
				Confirm
			</button>
		</div>
	);
};

export default CheckoutForm;
