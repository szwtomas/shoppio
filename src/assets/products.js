// For now, simulates an API call to fetch the products

const products = [
	{
		id: 0,
		title: "IPhone X",
		imgUrl: "https://www.isolutionsperu.com/wp-content/uploads/iphone-x.jpg",
		price: 1500,
		type: "Cell Phone",
		color: "Black",
		description: "Iphone X 2020 model, 128Gb storage capacity",
	},
	{
		id: 1,
		title: "Samsung S21 FE",
		imgUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990ezwaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990ezwaaro-thumb-530832036?imwidth=480",
		price: 850,
		type: "Cell Phone",
		color: "White",
		description: "Samsung S21 Fun Edition, 128GB",
	},
	{
		id: 2,
		title: "Moto G9 Plus",
		imgUrl: "https://resizer.glanacion.com/resizer/wutXCXkBp0p7nMlt0BwX7dcKrik=/879x586/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3LMEOFJZRBHTXIOEPBF7VNDB3E.jpg",
		price: 500,
		type: "Cell phone",
		color: "Black",
		description: "The newest MotoG in the market",
	},
	{
		id: 3,
		title: "Xiomi Redmi Note 10",
		imgUrl: "https://s3-sa-east-1.amazonaws.com/saasargentina/c7PSiq9dWdXInyZ0b05B/imagen",
		price: 350,
		type: "Cell Phone",
		color: "White",
		description: "The best price-quality phone available",
	},
];

const getProducts = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

const getProductById = id => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const found = products.find(p => p.id === id);
			if (found !== undefined) {
				resolve(found);
			} else {
				reject(new Error("Product not found"));
			}
		}, 2000);
	});
};

export { getProducts, getProductById };
