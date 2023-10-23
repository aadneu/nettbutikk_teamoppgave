const model = {
	app: {
		pages: [
			"main",
			"profile",
			"shoppingCart",
			"about",
			"productList",
			"productDetailed",
			"category",
			"login",
			"newuser",
		],

		currentCategory: "",

		currentView: "main",

		loggedIn: true,

		loggedInAs: "t2",
	},
	salamander: {
		firfisle: ["firfisle"],
	},
	inputs: {
		search: "",

		productList: {
			sort: {
				field: "price",
				isAscending: true,
			},
		},

		profile: {
			newuser: {
				name: "",
				password: "",
				repeatpassword: "",
				email: "",
				adress: "",
				zipcode: "",
				city: "",
				phone: "",
			},
		},

		shoppingCart: {
			rabattkode: "",
			items: [
				{
					productId: 123,
					count: 0,
					name: "Ekte farse fra Jæren",
					description: "Eksklusivt farse dinner-kit, limited edition!",
					price: 1200, // Pris i NOK
					image:
						"https://ams3.digitaloceanspaces.com/rsposres/Article_Images/DBE456D22724910EE0530A01000A8647.gif",
				},

				{
					productId: 124,
					count: 0,
					name: "Topptur™ turtopp",
					description: "En turkopp i prima kvalitet som holder varmen lenge.",
					price: 1750,
					image:
						"https://productimages.biltema.com/v1/Image/product/xlarge/2000038155/2",
				},

				{
					productId: 125,
					count: 0,
					name: "Hatt til katt",
					description: "Alle katters store drøm, en egen hatt!",
					price: 300,
					image:
						"https://cgsentinel.com/uploads/images/2019/09/f9985ca22ff84742b73f48b36174e4ce.jpg",
				},
			],
		},

		login: {
			existingUser: true, //if true: username, password -> logged in= true, else users.push({username, password})
			email: "",
			password: "",
		},
	},

	data: {
		users: [
			{
				email: "t2",
				password: "t2",
				customerId: "0",
				admin: true,
			},
			{
				name: "Ben Dover",
				password: "bendover",
				email: "getin@getacademy.no",
				adress: "Railingstreet 4",
				zipcode: "6969",
				city: "Larvik",
				phone: "42069420",
				customerid: "1",
			},
		],

		categories: ["Mat", "Tilbehør", "Merch"],

		about: {
			companyDesc: "",
			warning: "Ferdsel på eget ansvar",
		},

		profile: {
			purchases: [
				`Ekte farse fra Jæren, ordre.nr.: 1969 dato: 2/10/2023`,
				`Hatt til katt (rosa), ordre.nr.: 420 dato: 24/9/2023`,
			],
		},

		shoppingCart: {
			gyldigRabattkode: "Aalto23",
			rabattProsent: 10,
			items: [],
		},

		products: [
			{
				title: "Farse dinner-kit",
				id: 420,
				description:
					"Lag mat til hele familien med dette fantastiske middags-kit'et",
				shortDesc: "Jahåååda",
				price: 150,
				stars: 5,
				image: [
					"https://ams3.digitaloceanspaces.com/rsposres/Article_Images/DBE456D22724910EE0530A01000A8647.gif",
				],
				category: "Mat",
				instock: true,
			},
			{
				title: "Hatter til Katter",
				id: 421,
				description: "Spice it up",
				shortDesc: "Spice it down",
				price: 75,
				stars: 5,
				image: [
					"https://cgsentinel.com/uploads/images/2019/09/f9985ca22ff84742b73f48b36174e4ce.jpg",
				],
				category: "Tilbehør",
				instock: true,
			},
			{
				title: "Terje T-shirt",
				id: 421,
				description: "Spice it up",
				shortDesc: "Spice it down and around",
				price: 7500,
				stars: 5,
				image: [
					"https://getacademy.no/hs-fs/hubfs/12-Sep-12-2023-07-34-46-3774-AM.png?width=940&height=788&name=12-Sep-12-2023-07-34-46-3774-AM.png",
				],
				category: "Merch",
				instock: true,
			},
		],

		logo: "images/logo.PNG",
	},
};

// const productFactory = (title, id, description, price, stars, image, category, instock) => {
//   return {
//     title,
//     id,
//     description,
//     price,
//     stars,
//     image,
//     category,
//     instock
//   }
// }

// model.data.products

// model.data.products.push(productFactory('Ja', '421','Enig', 50, 5, 'somesource', 'utsagn', true))
