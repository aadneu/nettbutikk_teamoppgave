const model = {

  app: {
    pages: [
      'mainPage',
      'profilePage',
      'shoppingCartPage',
      'aboutPage',
      'productListPage',
      'productDetailedPage',
      'categoryPage',
      'loginPage',
    ],
    currentView: "mainPage",

    loggedIn: true,

    loggedInAs: "T2",
  },

  inputs: {
    search: "",

    productListPage: {
      sort: {
        field: "price",
        isAscending: true,
      },
    },

    profilePage: {
      user: {
        name: "Ben Dover",
        email: "getin@getacademy.no",
        adress: "Railingstreet 4",
        zipcode: "6969",
        phone: "42069420",      
      },
    },

    shoppingCartPage: {
      rabattkode: "",
      items: [
        {productId: 123, count: 1}
      ]
    },

    loginPage: {
        existingUser: true,//if true: username, password -> logged in= true, else users.push({username, password})
        username: '',
        password: '',
    }
  },

  data: {
    users: [
      {username: 'T2', password:'', customerId: '', admin: true}
    ],

    categories: [],

    aboutPage: {
        companyDesc: '',
        warning: 'Ferdsel på eget ansvar',
    },

    profilePage: {
        purchases: [
          `Ekte farse fra Jæren, ordre.nr.: 1969 dato: 2/10/2023`, 
          `Hatt til katt (rosa), ordre.nr.: 420 dato: 24/9/2023`,
        ]
    },

    shoppingCartPage: {
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
        shortDesc: "",
        price: 150,
        stars: 5,
        image:
          ["https://ams3.digitaloceanspaces.com/rsposres/Article_Images/DBE456D22724910EE0530A01000A8647.gif",],
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
