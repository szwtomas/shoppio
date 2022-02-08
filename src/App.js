import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "normalize.css";
import "./index.css";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<ItemListContainer greeting="Hello, world!" />
		</div>
	);
};

export default App;
