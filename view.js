let app = document.getElementById("app");

viewApp();
function viewApp() {
	let html = ``;
	html += createHeaderHTML();

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
	}else if (model.app.currentView == "shoppingCart") {
		html += shoppingCartView();
	}
	app.innerHTML = html;
}

function createHeaderHTML() {
	return /*HTML*/ `
    <image src='${model.data.logo}'>
    <input type='text' placeholder='Søk'>
    <button>🔍</button>
    <button>*shoppingcart icon*</button>
    <button>*Registrer icon*</button>
    <button>*Login Icon*</button> <br>
    <div>
      <button>Hjem</button>
      <button>Produkter</button>
      <button>Om oss</button>
    </div>
  `;
}
