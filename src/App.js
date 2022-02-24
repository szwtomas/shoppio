import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "normalize.css";
import "./index.css";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
	return (
		<div className="app">
			<CartContextProvider defaultValue={[]}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/about" element={<h1>About Us</h1>} />
						<Route
							path="/detail/:productId"
							element={<ItemDetailContainer />}
						/>
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</CartContextProvider>
		</div>
	);
};

export default App;
