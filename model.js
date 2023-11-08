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

		currentProduct: "",

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
				purchases: [],
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
				purchases: [],
			},
			{
				name: "Ben Dover",
				password: "t1",
				email: "t1",
				address: "Larviksgate 4",
				zipcode: "4450",
				city: "Larvik",
				phone: "99887722",
				customerid: "1",
				admin: false,
				purchases: []
			},
			{
				name: "Ådne",
				password: "å",
				email: "å",
				address: "Brynegata 4",
				zipcode: "1234",
				city: "Bryne",
				phone: "93939393",
				customerid: "2",
				admin: false,
				purchases: [],
			},
		],

		categories: [
			{ name: 'Alle produkter', description: ''},
			{ name: 'Mat',
				description: ' I vår matkategori finner du et variert utvalg av deilige og smakfulle produkter. Enten du er på jakt etter snacks, sunne alternativer, eller gourmetprodukter, har vi det du trenger for å tilfredsstille smaksløkene dine. Fra søtsaker til krydder, kaffe til te, og alt imellom, har vi et bredt utvalg av matvarer som passer for enhver anledning.'},
			{ name: 'Tilbehør',
				description: 'I vår tilbehørskategori finner du alt du trenger for å fullføre ditt utseende eller forbedre din daglige rutine. Dette inkluderer smykker, vesker, skjerf, solbriller, belter og andre stilige elementer som kan gi det lille ekstra til antrekket ditt. Enten du ønsker å skape en elegant look eller legge til personlige aksenter, har vi et mangfold av tilbehør å velge mellom.'},
			{ name: 'Merch',
				description: 'Vår merchandise-kategori er dedikert til fans av ulike merker, artister eller populære kulturer. Her kan du finne offisielle produkter som t-skjorter, plakater, krus, hettegensere og mye mer. Det er det perfekte stedet å vise din støtte til dine favorittmerker eller å finne gaver til likesinnede.'},
			{ name: 'Headset',
				description: ' I vår headset-kategori tilbyr vi et utvalg av høykvalitets hodetelefoner og øretelefoner for den ultimate lydopplevelsen. Enten du er en musikkentusiast, gamer eller bare elsker å lytte til lyd i høy kvalitet, har vi et utvalg av trådløse og kablede alternativer for å tilfredsstille dine behov. Fra støyreduserende hodetelefoner til sportsspesifikke øretelefoner, har vi noe for enhver lydentusiast.'},
			{ name: 'Diverse',
				description: 'I vår diverse kategori finner du en eklektisk samling av produkter som ikke passer inn i de andre kategoriene, men som likevel har sin egen sjarm og nytte. Dette kan inkludere gaver, dekorasjoner, gadgets, verktøy og andre interessante ting som kan være overraskende nyttige eller morsomme å utforske. Dette er stedet for skatter og unike funn som kan berike livet ditt på uventede måter.'},
		],

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
				title: "Farse dinner kit",
				id: 420,
				description: "Lag deilige måltider med en vri av humor. Med morsomme oppskrifter, kreative ingredienser og en vitsedelingskonkurranse, blir middagen din til en latterfull opplevelse. Dette kitet er perfekt for familie- og vennemiddager, og det vil garantert sette en humoristisk tone for enhver anledning.	I tillegg er dette kitet en flott gaveidé for matentusiaster og humorfans. Gi dine kjære en unik gave som kombinerer kulinarisk nytelse med morsomme stunder rundt bordet. Oppdag gleden av å lage mat med latter, og bestill Komiske Kjøkken Farse Dinner Kit i dag for å skape minnerike måltider og smittende latter!",
				shortDesc: "Utforsk de autentiske smakene fra den vakre Jæren-regionen i Norge med vårt nøye sammensatte dinner kit. Vi har håndplukket de ferskeste ingrediensene fra Jæren, kjent for sin rike matkultur og naturskjønnhet, og satt sammen en deilig middagspakke for deg å lage hjemme.",
				price: 150,
				stars: 5,
				image: [
					"https://image.spreadshirtmedia.net/image-server/v1/compositions/T141A1PA6264PT17X26Y0D305392252W19738H29794/views/1,width=500,height=500,backgroundColor=ffffff,noPt=true/farsetilbehoer-kokkeforkle.jpg"],
				category: "Mat",
				instock: true,
			},
			{
				title: "Hatter til Katter",
				id: 421,
				description: "Gjør din firbente venn til den mest stilsikre katten i nabolaget med vårt utvalg av eksklusive hatter til katter! Våre hatter er designet spesielt for katter som elsker å uttrykke sin unike personlighet og skille seg ut fra mengden. Uansett om din katt er en eventyrer, en diva eller bare elsker å være midtpunktet, har vi den perfekte hatten for enhver smak.",
				shortDesc: "Katter med Hatter – Fordi selv katter trenger en stiloppgradering! Gjør din katt til den mest elegant kledde i nabolaget med vårt utvalg av trendy hatter.",
				price: 300,
				stars: 5,
				image: [
					"https://static.partyking.org/fit-in/1300x0/products/original/sombrero-for-husdjur-1.jpg",
				],
				category: "Tilbehør",
				instock: true,
			},
			{
				title: "Terje T-shirt",
				id: 422,
				description: "Introduserer vår Terje T-skjorte – en unik LIMITED EDITION kolleksjon som hyller stilen og lidenskapen til den ikoniske Terje, en personlighet som skiller seg ut fra mengden. Denne T-skjorten er ikke bare et plagg; det er en livsstil, en påminnelse om dristighet, individualitet og autentisitet.",
				shortDesc: "Vår Terje T-skjorte - En LIMITED EDITION kolleksjon som feirer den unike stilen og lidenskapen til den ikoniske Terje. Den er mer enn bare klær; den representerer dristighet, individualitet og autentisitet.",
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
				description: "Velkommen til Musikkens Mesterklasse, der vårt headset tar på seg rollen som den ultimate professor! Dette er ikke bare et headset; det er din personlige guide til lydverdenens mest overdådige konserter, de mest episke basslinjene og de høyeste tonene som kun hunder kan høre. Med vårt headset, vil du føle deg som en rockestjerne – uten å måtte lære å spille et eneste instrument.",
				shortDesc: "Headset for lydelskere som vet at god musikk starter med fantastisk lydkvalitet!",
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
				description: "Våre skumle Porselensdukker er ikke for pyser. Disse dukkene tar skrekk til et helt nytt nivå. Inspirert av mareritt og skrekkfilmer, er disse dukkene håndlaget med uhyggelige detaljer som vil gi deg frysninger nedover ryggen. De er faktisk litt skumlere enn Chucky, men bare litt – akkurat nok til å gi deg en ekstra dose grøsninger. NB: Trenger ikke batterier.",
				shortDesc: "Skumle porselensdukker kombinerer skjønnheten til porselenskunst med en uhyggelig vri, med glassaktige øyne og bleke ansikter som gir en grøssende atmosfære.",
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
				instock: false,
			},
			{
				title: "Orbchess",
				id: 426,
				description: "Orbchess er et sjakkbrett med spillets brett i en kule. Inspirert av Steampunk-universet, akkurat som Mécanigma, Minipunk, Toupunk eller Robygrab, er OrbChess et mobilt sjakkbrett takket være sine mekaniske hjul og leddede mekanismer. Det har tre forskjellige rotasjonsakser for å gi bedre oversikt under spillet. Hver brikke i sjakksettet holdes sammen av en bioplastisk pinne. Enkelt sett sammen bøndene for å flytte dem rundt. Når spillet er over, kan du enten la dem være synlige eller oppbevare dem i basens oppbevaringsboks.",
				shortDesc: "Orbchess er et sjakkbrett i form av en kule inspirert av Steampunk-universet, som er mobilt takket være mekaniske hjul og har tre rotasjonsakser for bedre spilloversikt, med bioplastiske brikkefester for enkel montering og oppbevaringsboks for brikker når spillet er over.",
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
				description: "Sjokoladesigaretter er en nostalgisk godbit som bringer tilbake barndomsminner. Disse deilige sjokoladestengene er formet som sigaretter, men de er 100 % tobakksfrie. Hver sjokoladesigarett er laget av førsteklasses melkesjokolade, og de er pakket i papirhylser som gir dem et autentisk sigarettutseende. Nyt den søte, smeltende smaken av sjokolade uten bekymring, og del gjerne denne klassikeren med venner for en morsom og nostalgisk opplevelse. Sjokoladesigaretter er den perfekte godbiten for dem som elsker søtsaker med et snev av barndomsminner.",
				shortDesc: "Sjokoladesigaretter er en nostalgisk godbit laget av førsteklasses melkesjokolade og pakket i autentiske sigarettpapirhylser. De gir deg en søt smaksopplevelse uten tobakk og er perfekte for en morsom tur ned barndommens minnebane.",
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
				description: "Denne tannbørsten har en børsteteknologi som sprer gule kjemikaler inn i tennene dine. Dette gir gule, skinnende tenner. Dette er det nyeste og mest trending moten i moteverdenen, og blir blant annet brukt i 'Victoria Secret Models' og blant influensere. Glem forrige versjon av deg selv, skap ditt nye jeg!",
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
				instock: false,
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
				instock: false,
			},
			{
				title: "Mopedbil",
				id: 431,
				description: 'En mopedbil er en praktisk og kompakt kjøretøytype som gir deg friheten til å utforske byen eller landsbygda. Denne lette firehjulsbilen kombinerer bekvemmeligheten av en moped med komforten og sikkerheten til en bil. Med plass til to passasjerer, lar mopedbilen deg enkelt navigere gjennom trafikken, finne parkeringsplasser, og dra på eventyr uten å måtte bekymre deg for drivstofforbruket. Enten du trenger et pålitelig transportmiddel til daglig pendling eller ønsker å cruise rundt i byen med stil, er en mopedbil det ideelle valget. Den er miljøvennlig, økonomisk og en morsom måte å komme seg rundt på!',
				shortDesc: "Mopedbil, også kjent som en mikrobil eller firehjuls moped, er et lite, lettkjøretøy som ligger et sted mellom en vanlig motorsykkel og en bil. Selv 16-åringer har lov til å stoppe trafikken med denne NYE rakkeren.",
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
				shortDesc: 'Naruto - Komplett DVD-boks er den ultimative samlingen for Naruto-fans. Få hele serien i ett sett og bli med på Narutos bemerkelsesverdige reise fra ung aspirerende ninja til mektig shinobi',
				price: 1999,
				stars: 4,
				image: [
					"https://i.ebayimg.com/images/g/tz4AAOSwanRhVCge/s-l1600.jpg",
				],
				category: "Diverse",
				instock: true,
			},
			{
				title: "Aalto's Purr-fect Cat-Eye Shades",
				id: 433,
				description: 'Endelig kan din pelskledde venn føle seg som en Hollywood-superstjerne hver gang de trasker rundt på sine kattevandringer. De herlige kattesolbrillene fra "Alt fra Aalto" er det ultimate tilbehøret for katter som setter pris på en sunn dose glamour i hverdagen. Enten de flanerer ned en imaginær kattekatwalk i stua eller bare slapper av i bakgården, vil disse solbrillene sette en ny standard for kattestil og få alle andre katter i nabolaget til å misunne din firbente bestevenn. ',
				shortDesc: 'Gi din firbente bestevenn en dose stjerneglans med Aaltos Purr-fect Cat-Eye Shades fra "Alt fra Aalto"',
				price: 350,
				stars: 4,
				image: [
					"https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/CIITKIIHM5HTPBPVT6ACJ5IWMM.jpg",
				],
				category: "Tilbehør",
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
