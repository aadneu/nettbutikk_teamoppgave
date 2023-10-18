let app = document.getElementById("app");

viewApp();
function viewApp() {
	let html = /*HTML*/ `
    <div id='page'>
        <div id='header'>HEADER${createHeaderHTML()}</div>
        <div id='meny'><div>
      <button onclick="changeView('main')">Hjem</button>
      <button onclick="changeView('productList')">Produkter</button>
      <button onclick="changeView('about')">Om oss</button>
    </div></div>
        <div id='left'>LEFT ${viewList()}</div>
        <div id='right'>RIGHT</div>
        <div id='innhold'>${pageView()}
                  </div>
    </div>

    <div id='footer'>Ferdsel på eget ansvar</div>
    `;

	app.innerHTML = html;     
}

function pageView() {
	let html = ``;
	if (model.app.currentView == "about") {
		html += aboutView();
	} else if (model.app.currentView == "main") {
		html += mainView();
	} else if (model.app.currentView == "profile") {
		html += profileView();
	} else if (model.app.currentView == "productDetailed") {
		html += productDetailedPageView();
	} else if (model.app.currentView == "productList") {
		html += productListView();
	} else if (model.app.currentView == "login") {
		html += loginView();
	} else if (model.app.currentView == "shoppingCart") {
		html += shoppingCartView();
	} else if (model.app.currentView == "newuser") {
		html += newUserView();
	}

	return html;
}

function createHeaderHTML() {
	return /*HTML*/ `
    <image id='logo' src='${model.data.logo}' onclick="changeView('main')">
    <input id='search' type='text' placeholder='Søk'>
    <button onclick="">🔍</button>
    <button onclick="changeView('shoppingCart')">*shoppingcart icon*</button>
    <button onclick="changeView('newuser')">*Registrer icon*</button>
    <button onclick="changeView('login')">*Login Icon*</button> <br>
    
  `;
}
