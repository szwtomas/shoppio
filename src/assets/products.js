// For now, simulates an API call to fetch the products

const products = [
	{
		id: 0,
		title: "IPhone X",
		imgUrl: "https://www.isolutionsperu.com/wp-content/uploads/iphone-x.jpg",
		price: 1500,
		type: "Cell Phone",
		categoryId: 0,
		color: "Black",
		description: "Iphone X 2020 model, 128Gb storage capacity",
	},
	{
		id: 1,
		title: "Samsung S21 FE",
		imgUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990ezwaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990ezwaaro-thumb-530832036?imwidth=480",
		price: 850,
		type: "Cell Phone",
		categoryId: 0,
		color: "White",
		description: "Samsung S21 Fun Edition, 128GB",
	},
	{
		id: 2,
		title: "Moto G9 Plus",
		imgUrl: "https://resizer.glanacion.com/resizer/wutXCXkBp0p7nMlt0BwX7dcKrik=/879x586/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3LMEOFJZRBHTXIOEPBF7VNDB3E.jpg",
		price: 500,
		type: "Cell phone",
		categoryId: 0,
		color: "Black",
		description: "The newest MotoG in the market",
	},
	{
		id: 3,
		title: "Xiomi Redmi Note 10",
		imgUrl: "https://s3-sa-east-1.amazonaws.com/saasargentina/c7PSiq9dWdXInyZ0b05B/imagen",
		price: 350,
		type: "Cell Phone",
		categoryId: 0,
		color: "White",
		description: "The best price-quality phone available",
	},
	{
		id: 4,
		title: "IPad Mini",
		imgUrl: "https://www.techinn.com/f/13734/137343565/apple-tablet-ipad-mini-256gb-7.9.jpg",
		price: 600,
		type: "Tablet",
		categoryId: 2,
		color: "White",
		description: "Combine the Ipod portability with IPad power",
	},
	{
		id: 5,
		title: "Asus VivoBook",
		imgUrl: "https://s3-sa-east-1.amazonaws.com/saasargentina/w57ww7rHcpfBIq70cZq3/imagen",
		price: 800,
		type: "Notebook",
		categoryId: 1,
		color: "Black",
		description: "Intel I3, 4GB RAM and 1TB Storage",
	},
	{
		id: 6,
		title: "MacBook Pro",
		imgUrl: "https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp",
		price: 1500,
		type: "Notebook",
		categoryId: 1,
		color: "Silver",
		description: "MacBook M1 Pro, 14' inches 2021 model.",
	},
	{
		id: 7,
		title: "Lenovo Tab P11",
		imgUrl: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc",
		price: 250,
		type: "Tablet",
		categoryId: 2,
		color: "Black",
		description:
			"Adéntrate en el reino del streaming. Tu experiencia visual es la prioridad de la Tab P11, con una asombrosa resolución 2K en una pantalla IPS de 11”",
	},
	{
		id: 8,
		title: "LG G3 Beat",
		imgUrl: "https://www.muycomputer.com/wp-content/uploads/2014/06/lg-g3-1-600x450.jpg",
		price: 425,
		type: "Cell Phone",
		categoryId: 0,
		color: "Black",
		description: "Smartphone with 4G and Andriod v4.2.2",
	},
	{
		id: 9,
		title: "Samsung S21 Ultra",
		imgUrl: "https://cnnespanol.cnn.com/wp-content/uploads/2021/02/Galaxy-S21-Ultra-caracteristicas.jpg?resize=940,530",
		price: 1100,
		type: "Cell Phone",
		categoryId: 0,
		color: "Black",
		description:
			"Samsung Galaxy S21 Ultra: el refinamiento casi perfecto del S20 Ultra",
	},
	{
		id: 10,
		title: "Ipad Pro 4",
		imgUrl: "https://images.fravega.com/f300/b2850b9dd3e84a07885becc4da5fa840.jpg.webp",
		price: 800,
		type: "Tablet",
		categoryId: 2,
		color: "Black, White, Silver",
		description: "IPad Pro 12.9'' 256Gb 4th Generation",
	},
	{
		id: 11,
		title: "Moto G20",
		imgUrl: "https://images.fravega.com/f300/3f4179872125f6c70def8d079962744d.jpg.webp",
		price: 500,
		type: "Cell Phone",
		categoryId: 0,
		color: "Black, Cyan, White",
		description: "Moto G20 128GB",
	},
];

const getProducts = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
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
		}, 1000);
	});
};

const getProductsByCategoryId = categoryId => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const found = products.filter(p => p.categoryId === categoryId);
			if (found !== undefined) {
				resolve(found);
			} else {
				reject(
					new Error("There are no products matching the category")
				);
			}
		}, 500);
	});
};

export { getProducts, getProductById, getProductsByCategoryId };
