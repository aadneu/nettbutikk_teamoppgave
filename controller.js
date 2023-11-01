function changeView(pageid) {
	model.app.currentView = pageid;
	viewApp();
}

function viewList() {
	let viewlist = "";
	for (let i = 0; i < model.app.pages.length; i++) {
		viewlist += `<div><button onclick='changeView("${model.app.pages[i]}")'>${model.app.pages[i]}</button></div>`;
	}
	return viewlist;
}

function getProductById(id) {
	for (let product of model.data.products) {
		if (product.id == id) return product;
	}
	return null;
}


function searchFunction(){
	let inputword =  model.inputs.search.toLowerCase()
	let results = [];
	for(let i = 0; i < model.data.products.length; i++){
		if(model.data.products[i].title.toLowerCase().includes(inputword)){
			results.push(model.data.products[i])
		}
	}
	return results
}

//  function createSearchResultList(){
// 	let showSearchResult;
// 	for(let i = 0; i < results.length; i++){
// 		showSearchResult += results[i]
// 	}
// 	return showSearchResult
//  }