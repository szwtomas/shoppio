import { db } from "./firebase";
import {
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
	addDoc,
	Timestamp,
	updateDoc,
} from "firebase/firestore";

// Returns promise that resolves an array with all the available products
// In case of failure, rejects with an error message
const getAllProducts = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const productCollecctionRef = collection(db, "Products");
			const querySnapshot = await getDocs(productCollecctionRef);
			const products = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
			});
			resolve(products);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

// Returns promise that resolves the specific product with matching Id
// In case of failure (e.g the product doesn't exist), rejects with an error message
const getProductById = productId => {
	return new Promise(async (resolve, reject) => {
		try {
			const docRef = doc(db, "Products", productId);
			const res = await getDoc(docRef);
			const item = { id: res.id, ...res.data() };
			resolve(item);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

// Return promise that resovles an array with all the product with matching category
// In case of failure (e.g: The category doesn't exist), reject with an error message
const getProductsByCategory = category => {
	if (!category) {
		return getAllProducts();
	}

	return new Promise(async (resolve, reject) => {
		try {
			const productCollecctionRef = query(
				collection(db, "Products"),
				where("category", "==", category)
			);

			const querySnapshot = await getDocs(productCollecctionRef);
			const products = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
			});

			resolve(products);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

// Adds an order into the Firestore Database, of the form {buyer, items, total, timestamp}
// On succes, resolves order ID
// In case of failure, rejects with an error
const addOrder = order => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await addDoc(collection(db, "Orders"), order);
			resolve(res.id);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

// Updates the product's stock to newStock.
// In case of failure, rejects with an error
const updateStock = (id, newStock) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await updateDoc(doc(db, "Products", id), {
				stock: newStock,
			});
			resolve(res);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

// Returns timestamp retrieved from Firebase server
const getTimestamp = () => {
	return Timestamp.fromDate(new Date());
};

// Returns a promise that resolves an array of categories
// In case of failure, rejects with an error
const getCategories = () => {
	return new Promise(async (resolve, reject) => {
		try {
			// const res = await getDocs(collection(db, "Categories"));
			// const categories = res.map(category => {
			// 	return { id: category.id, ...category.data() };
			// });
			const categoryCollecctionRef = collection(db, "Categories");
			const querySnapshot = await getDocs(categoryCollecctionRef);
			const categories = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
			});
			resolve(categories);
		} catch (err) {
			reject(new Error(err));
		}
	});
};

export {
	getProductById,
	getAllProducts,
	getProductsByCategory,
	addOrder,
	updateStock,
	getCategories,
	getTimestamp,
};
