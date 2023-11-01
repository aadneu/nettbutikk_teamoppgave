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

		carousel: 0,

		currentCategory: "",

		currentProduct: "0",

		currentView: "main",

		loggedIn: false,

		currentUser: "",
		userEditMode: false,
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
				address: "",
				zipcode: "",
				city: "",
				phone: "",
				customerid: "",
			},
		},

		shoppingCart: {
			rabattkode: "",
			total: 0.00,
			items: [
				
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
				name: "admin",
				password: "t2",
				email: "t2",
				customerid: "0",
				admin: true,
			},
			{
				name: "Ben Dover",
				password: "t1",
				email: "t1",
				address: "Railingstreet 4",
				zipcode: "6969",
				city: "Larvik",
				phone: "42069420",
				customerid: "1",
				admin: false,
			},
			{
				name: "Ådne",
				password: "å",
				email: "å",
				address: "Railingstreet 4",
				zipcode: "6969",
				city: "Bryne",
				phone: "42069420",
				customerid: "2",
				admin: false,
			},
		],

		categories: ["Mat", "Tilbehør", "Merch", "Headset", 'Diverse'],

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
			rabattProsent: 30,
			items: [],
		},

		products: [
			{
				title: "Ekte farse fra Jæren",
				id: 420,
				description: "Eksklusivt farse dinner-kit, limited edition!",
				shortDesc: "Lag mat til hele familien",
				price: 150,
				stars: 5,
				image: [
					"https://ams3.digitaloceanspaces.com/rsposres/Article_Images/DBE456D22724910EE0530A01000A8647.gif"],
				category: "Mat",
				instock: true,
			},
			{
				title: "Hatter til Katter",
				id: 421,
				description: "Alle katters store drøm, en egen hatt!",
				shortDesc: "Spice it down",
				price: 300,
				stars: 5,
				image: [
					"https://cgsentinel.com/uploads/images/2019/09/f9985ca22ff84742b73f48b36174e4ce.jpg",
				],
				category: "Tilbehør",
				instock: true,
			},
			{
				title: "Terje T-shirt",
				id: 422,
				description: "T-skjorte brukt av Terje, LIMITED EDITION!",
				shortDesc: "Spice it down and around",
				price: 7500,
				stars: 4,
				image: [
					"https://getacademy.no/hs-fs/hubfs/12-Sep-12-2023-07-34-46-3774-AM.png?width=940&height=788&name=12-Sep-12-2023-07-34-46-3774-AM.png",
				],
				category: "Merch",
				instock: true,
			},
			{
				title: "Headset",
				id: 423,
				description: "Turtle on the beach",
				shortDesc: "Soundblast",
				price: 800,
				stars: 5,
				image: [
					"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ15xCGsA71XTxsyrT7h58uq0m9rHPlN9lDjNG9gXlmIywEHy-J2knCuhxQ5kSm8M6vw8v_N8M0I3WX3lzuIWpTeU8MKn6uqLDKH80P5HZZbpkLxr0-9m2HsIl-SUm-fvsfyX1UcA&usqp=CAc",
				],
				category: "Headset",
				instock: true,
			},
			{
				title: "Skumle porselensdukker",
				id: 424,
				description: "Veldig skummle dukker som er faktisk litt skumlere enn chucky, men bare litt",
				shortDesc: "Skummelere en Chucky, men bare litt:P",
				price: 666,
				stars: 4,
				image: [
					"https://img.fruugo.com/product/5/46/664351465_max.jpg"
				],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Røykmaskin",
				id: 425,
				description: "En røykmaskin er et essensielt utstyr for å skape imponerende spesialeffekter og atmosfære i scenekunst, konserter og arrangementer. Den fungerer ved å omdanne en spesiell røykvæske til tåke eller røyk, som kan belyses og brukes til å fremheve lysstråler og skape dramatiske visuelle effekter. Våre røykmaskiner varierer i størrelse og kapasitet, og er enkle å bruke. Velg riktig modell for dine behov og gi ditt arrangement den unike stemningen det fortjener.",
				shortDesc: "Røykmaskin: Skaper atmosfæriske effekter med tåke eller røyk.",
				price: 990,
				stars: 2,
				image: [
					"https://sw3310.sfstatic.io/upload_dir/shop/_thumbs/Roegmaskine-med-6-x-RGB-LEDs,-1200W--1.w695.h523.fill.jpg",
				],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Orbchess",
				id: 426,
				description: "The Orbchess is a chessboard with its game board in a sphere. Inspired by the Steampunk universe just like the Mécanigma, Minipunk, Toupunk or Robygrab, the OrbChess is a mobile chessboard thanks to its mechanical wheels and articulated mechanisms. It has 3 different axes of rotation to allow greater visibility during the game. Each piece of the chess set is held together by a bioplastic peg. Easily snap the pawns together to move around. Once the game is over, leave them visible or store them in the base storage box.",
				shortDesc: "Oj",
				price: 4099,
				stars: 5,
				image: [
					"https://i.etsystatic.com/18002491/r/il/ff8d57/4849295652/il_794xN.4849295652_o00w.jpg"],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Sjokoladesigaretter",
				id: 427,
				description: "Utforsk vår deilige kolleksjon av sjokoladesigaretter – en unik og smakfull godbit for sjokoladeentusiaster",
				shortDesc: "Nyt den delikate smaken av sjokolade uten røyk og ild.",
				price: 50,
				stars: 3,
				image: [
					"https://shared.cdn.smp.schibsted.com/v2/images/f2707ff3-205a-4aaa-9ff0-27cdff315d06?fit=crop&format=auto&h=375&w=370&s=53d682cf6eea0a97ef495d0ab39713ed8ec465b9",
				],
				category: "Mat",
				instock: true,
			},
			{
				title: "Elektrisk tannbørste for gule tenner",
				id: 428,
				description: "Denne tannbørsten har en børsteteknologi som sprer gule kjemikaler inn i tennene dine. Dette gir gule, skinnende tenner. Glem forrige versjon av deg selv, skap ditt nye jeg!",
				shortDesc: "Denne tannbørsten har en børsteteknologi som sprer gule kjemikaler inn i tennene dine. Dette gir gule, skinnende tenner. Glem forrige versjon av deg selv, skap ditt nye jeg!",
				price: 1800,
				stars: 1,
				image: [
					"https://forum.klikk.no/foreldre/uploads/monthly_07_2013/post-42-3443.jpg"],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Ouija-board",
				id: 429,
				description: 'Velkommen til vårt mystiske Ouija-brett - den ultimate portalen til det overnaturlige! Med dette brettet kan du lage ditt eget skremmende seanseeventyr hjemme. Bare følg stavebokstavene og si HALLA til de andre siden (og kanskje til og med noen uventede gjester). Perfekt for spøkelsesjegere, det nysgjerrige, og de som leter etter svar fra den okkulte verden. Gi din nysgjerrighet en sjanse og gjør kveldene dine ekstra spennende med vårt Ouija-brett!',
				shortDesc: "Utforsk det overnaturlige med vårt Ouija-brett og kall på spøkelser og mystiske krefter fra den andre siden!",
				price: 650,
				stars: 3,
				image: [
					"https://img.fruugo.com/product/0/75/649963750_max.jpg",
				],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Cat-set",
				id: 430,
				description: 'Presentasjon av vårt Purrfect Cat Hodesett – den ultimate blandingen av stil og komfort for katteentusiaster! Dette bedårende hodesettet er designet med fluffy katteører og har høykvalitets lyd for din lytteglede. Enten du er en musikkelsker, en gamer eller bare vil legge til ekstra sjarm til dine tekniske tilbehør, er vårt katte-hodesett det ideelle valget. Med sin justerbare design og myke øreputer gir det en perfekt passform for timer med immersiv underholdning. Gjør deg klar for å vise frem din indre katte-entusiast og nyt lyden din med stil!',
				shortDesc: "Gjør hver lytteopplevelse unik med vårt kattehodesett, som kombinerer søt stil med komfortabel lyd. MJAU.",
				price: 300,
				stars: 5,
				image: [
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNS5t6koBOWgeu6kqGiRau_4XxgflPibzxqA&usqp=CAU",
				],
				category: "Headset",
				instock: true,
			},
			{
				title: "Mopedbil",
				id: 431,
				description: 'Mopedbil, også kjent som en mikrobil eller firehjuls moped, er et lite, lettkjøretøy som ligger et sted mellom en vanlig motorsykkel og en bil. Selv 16-åringer har lov til å stoppe trafikken med denne NYE rakkeren.',
				shortDesc: "HELT NY. LOVER. :)",
				price: 196900,
				stars: 1,
				image: [
					"https://scontent.fosl1-1.fna.fbcdn.net/v/t1.6435-9/107379775_10158379498222674_8965159078479330885_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=jLO9I_YYbLoAX_EcvCl&_nc_ht=scontent.fosl1-1.fna&oh=00_AfDItS7Lefm5qV2MmdSHtX6lWKEHSDlHxcmOC4noqtJ5jg&oe=65688FAA",
				],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Naruto - Komplett DVD-boks",
				id: 432,
				description: 'Naruto er en av de mest ikoniske og elskede anime-seriene gjennom tidene, og nå kan du eie hele eventyret samlet i denne imponerende Naruto DVD-boksen. Denne samleboksen gir deg tilgang til hele Naruto-serien fra begynnelse til slutt, inkludert både Naruto og Naruto Shippuden, totalt over 700 episoder av spennende eventyr. Egenskaper: Inneholder hele Naruto-serien, inkludert Naruto og Naruto Shippuden. DVD-format med høy bilde- og lydkvalitet. Undertekster på flere språk for internasjonal tilgjengelighet.Flerfoldige DVD-er satt i en praktisk oppbevaringsboks.',
				shortDesc: '',
				price: 1999,
				stars: 4,
				image: [
					"https://i.ebayimg.com/images/g/tz4AAOSwanRhVCge/s-l1600.jpg",
				],
				category: "Diverse",
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
