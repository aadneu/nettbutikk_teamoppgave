function productDetailedPageView() {
	let html = ``;

	let index = model.app.currentProduct;
	// console.log(index);
	html = /*HTML*/ `
    <div id='productDetailedGrid'>
        
            <div class="title">${model.data.products[index].title}</div>
			
            <div class="description">${model.data.products[index].description}.</div>
			
            <div class='price'>
            	<div>${model.data.products[index].price},- inkl. mva</div>
				<button class="shoppingcart" onclick="addToShoppingcart()">Legg til i handlekurv🛒</button>
				<div class="instock">${displayStockStatus()}</div>
						
			</div>
            
            
            
            <div class="stars">${displayStars()}</div>
            <img id="mainPicture" src="${model.data.products[index].image}">
        
    </div>
    `;
	return html;
}
function displayStars() {
	let index = model.app.currentProduct;
	if (model.data.products[index].stars == 1) {
		return "<div>★☆☆☆☆</div>";
	} else if (model.data.products[index].stars == 2) {
		return "<div>★★☆☆☆</div>";
	} else if (model.data.products[index].stars == 3) {
		return "<div>★★★☆☆</div>";
	} else if (model.data.products[index].stars == 4) {
		return "<div>★★★★☆</div>";
	} else if (model.data.products[index].stars == 5) {
		return "<div>★★★★★</div>";
	}
}

function displayStockStatus() {
	let index = model.app.currentProduct;
	if (model.data.products[index].instock == true) {
		return "🟢 På lager";
	} else {
		return "🔴 Ikke på lager";
	}
}
