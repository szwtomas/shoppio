import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
	const [cart, setCart] = useState(defaultValue);

	const isInCart = id => cart.some(item => item.id === id);

	const addItem = newItem => {
		setCart(prevCart => {
			if (!isInCart(newItem.id)) {
				return [...prevCart, newItem];
			}
			return prevCart.map(i =>
				i.id === newItem.id
					? { ...i, quantity: i.quantity + newItem.quantity }
					: i
			);
		});
	};

	const removeItem = id => {
		setCart(prevCart => {
			return prevCart.filter(item => item.id !== id);
		});
	};

	const clearCart = () => setCart([]);

	return (
		<CartContext.Provider
			value={{
				cart,
				cartSize: cart.length,
				addItem,
				isInCart,
				removeItem,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
export { CartContextProvider };
