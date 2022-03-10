import React, { useState, createContext } from "react";

const CartContext = createContext();

// Cart items are of the form { id, name, price, quantity }
const CartContextProvider = ({ defaultValue = [], children }) => {
	const [cart, setCart] = useState(defaultValue);

	// returns true if the cart contains a product with matching id
	const isInCart = id => cart.some(item => item.id === id);

	// Adds an item to the cart
	// If it already existed, sums both amounts so that it isn't repeated
	// items must be of the form { id, name, price, quantity }
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

	// Removes item with id 'id' if exists in cart, otherwise does nothing
	const removeItem = id => {
		setCart(prevCart => {
			return prevCart.filter(item => item.id !== id);
		});
	};

	// Empties the cart to 0 items
	const clearCart = () => setCart([]);

	// Returns total price for the order with the current cart
	const getTotal = () => {
		return cart.length === 0
			? 0
			: cart.map(item => item.price * item.quantity).reduce((x, y) => x + y);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				cartSize: cart.length,
				addItem,
				isInCart,
				removeItem,
				clearCart,
				getTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
export { CartContextProvider };
