import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCqq-tebGRwibrhYM7pmd5Y5dnq3WjfBCg",
	authDomain: "shoppio-8d609.firebaseapp.com",
	projectId: "shoppio-8d609",
	storageBucket: "shoppio-8d609.appspot.com",
	messagingSenderId: "671940766570",
	appId: "1:671940766570:web:046e78ee33c187b2a6d313",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
