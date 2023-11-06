let app = document.getElementById("app");

viewApp();
function viewApp() {
	let html = /*HTML*/ `
    <div id='page'>
        <div id='header'>${createHeaderHTML()}</div>
        <div id='meny'>
				<button onclick="changeView('main')">Hjem</button>
				<button onclick="changeView('category')">Produkter</button>
				<button onclick="changeView('about')">Om oss</button>
				</div>
        <div id='left'></div>
        <div id='innhold'>${pageView()}</div>
        <div id='right'></div>
				<div id='footer'>Copyright © [2023] Alt fra Aalto. Alle rettigheter reservert.</div>
			</div>	
    `;
	app.innerHTML = html;
}

function pageView() {
	let currentView = model.app.currentView;
	let html = ``;

	if (currentView == "main") {
		html += mainView();
	} else if (currentView == "about") {
		html += aboutView();
	} else if (currentView == "profile") {
		html += profileView();
	} else if (currentView == "productDetailed") {
		html += productDetailedPageView();
	} else if (currentView == "productList") {
		html += productListView();
	} else if (currentView == "login") {
		html += loginView();
	} else if (currentView == "shoppingCart") {
		html += shoppingCartView();
	} else if (currentView == "newuser") {
		html += newUserView();
	} else if (currentView == "category") {
		html += categoryView();
	}
	return html;
}

function createHeaderHTML() {
	return /*HTML*/ `
    <image id='logo' src='${model.data.logo}' onclick="changeView('main')">
    <div class='headerdiv'>
		<div class='searchBar' style='text-align: left'><input 
				style="height:40px;font-size:16pt;"
				oninput='model.inputs.search = this.value, showSearchResults(searchFunction())' 
				onchange='viewApp()' 
				type='text' 
				placeholder='Søk'
				value= '${model.inputs.search}'>
				<div class='dropDownSearch'>${searchFunction2()}</div>
				
		</div>
		<div class='headerbuttons'></div>
		<button class='headerbuttons' onclick="searchFunction()">🔍</button>
		<button class='headerbuttons' onclick="changeView('shoppingCart')">🛒${shoppingCartCounter()}</button>
			${isLoggedInButton()}

	</div>
 
  `;
}

function logOut() {
	model.app.loggedIn = false;
	model.app.currentUser = "";
	model.inputs.login.email = ''
	model.inputs.login.password = ''
	
	if ((model.app.currentView = "profile")) {
		model.app.currentView = "main";
	}
	viewApp();
}

function isLoggedInButton() {
	return model.app.loggedIn
		? `<button class='headerbuttons' onclick="changeView('profile')">Min side ☗</button> 
        <button class='headerbuttons' onclick="logOut()">Logg ut 🠔</button>`
		: `<button class='headerbuttons' onclick="changeView('newuser')">Ny bruker 👤</button>
        <button class='headerbuttons' onclick="changeView('login')">Login 🠖</button>
        `;
}

function shoppingCartCounter(){
	let counter = 0

	for(let i = 0; i<model.inputs.shoppingCart.items.length; i++){
		counter += model.inputs.shoppingCart.items[i].count
	}
	return counter;
}

function showSearchResults(arrayOfObject){
	let html = ''

	for(let i = 0; i < arrayOfObject.length; i++) {
		html += `<div class='searchItems' onclick='viewProduct(${arrayOfObject[i].id}), clearSearch()'>${arrayOfObject[i].title}</div>`
	}

	return html;
}