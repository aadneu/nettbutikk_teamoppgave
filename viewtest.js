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
				<div id='footer'>Ferdsel på eget ansvar</div>
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
    <input id='search' type='text' placeholder='Søk'>
    <button onclick="">🔍</button>
    <button onclick="changeView('shoppingCart')">*shoppingcart icon*</button>
    ${isLoggedInButton()}
     <br>
  `;
}

function logOut() {
	model.app.loggedIn = false;
	model.app.currentUser = "";
	if ((model.app.currentView = "profile")) {
		model.app.currentView = "main";
	}
	viewApp();
}

function isLoggedInButton() {
	return model.app.loggedIn
		? `<button onclick="changeView('profile')">*Min side icon*</button> 
        <button onclick="logOut()">*Logg ut icon*</button>`
		: `<button onclick="changeView('newuser')">*Registrer icon*</button>
        <button onclick="changeView('login')">*Login Icon*</button>
        `;
}
