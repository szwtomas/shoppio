import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "normalize.css";
import "./index.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<ItemListContainer />
			<ItemDetailContainer id={1} />
		</div>
	);
};

export default App;
