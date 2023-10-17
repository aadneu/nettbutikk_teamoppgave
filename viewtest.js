let app = document.getElementById("app");

viewApp();
function viewApp() {
	let html = /*HTML*/ `
    <div id='page'>
        <div id='header'>HEADER${createHeaderHTML()}</div>
        <div id='meny'><div>
      <button>Hjem</button>
      <button>Produkter</button>
      <button>Om oss</button>
    </div></div>
        <div id='left'>LEFT</div>
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
<<<<<<< Updated upstream
	} else if (model.app.currentView == "shoppingCart") {
   html += shoppingCartView();
  }
=======
	} else if (model.app.currentView == "newuser") {
		html += newUser();
	}
>>>>>>> Stashed changes
	return html;
}

function createHeaderHTML() {
	return /*HTML*/ `
    <image src='${model.data.logo}'>
    <input id='search' type='text' placeholder='Søk'>
    <button>🔍</button>
    <button>*shoppingcart icon*</button>
    <button>*Registrer icon*</button>
    <button>*Login Icon*</button> <br>
    
  `;
}
