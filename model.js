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

		currentView: "shoppingCart",

		loggedIn: true,

		loggedInAs: "T2",
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
			user: {
				name: "Ben Dover",
				email: "getin@getacademy.no",
				adress: "Railingstreet 4",
				zipcode: "6969",
				phone: "42069420",
			},
		},

		shoppingCart: {
			rabattkode: "",
			items: [
				{
					productId: 123,
					count: 1,
					name: "farseKit",
					description: "kort beskrivelse",
					price: 1200, // Pris i NOK
					image: "https://via.placeholder.com/150",
				},

				{
					productId: 124,
					count: 1,
					name: "turKopp",
					description: "kort beskrivelse",
					price: 1750,
					image: "https://via.placeholder.com/150",
				},

				{
					productId: 125,
					count: 1,
					name: "kattHatt",
					description: "kort beskrivelse",
					price: 300,
					image: "https://via.placeholder.com/150",
				},
			],
		},

		login: {
			existingUser: true, //if true: username, password -> logged in= true, else users.push({username, password})
			username: "",
			password: "",
		},
	},

	data: {
		users: [{ username: "T2", password: "", customerId: "", admin: true }],

		categories: [],

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
		],

		logo: "https://educationaltechnology.net/wp-content/uploads/2019/12/albert-bandura.jpg",
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
const pedobear = "creepy";
