function productDetailedPageView() {
	let html = ``;

	let index = model.app.currentProduct;
	let product = model.data.products[index];
	// console.log(index);
	html = /*HTML*/ `
    <div id='productDetailedGrid'>
            <div class="title">${product.title}</div>
			<div class="description">${product.description}.</div>
			<div class='price'>
            	<div>${product.price},- inkl. mva</div>
				<button class="shoppingcart" onclick="addToShoppingcart(${index})">Legg til i handlekurv🛒</button>
				<div class="instock">${displayStockStatus()}</div>
			</div>
            <div class="stars">${displayStars(product)}</div>
            <img  id="mainPicture" src="${product.image}">
        
    </div>
    `;
	return html;
}
function displayStars(product) {
	if (product.stars == 1) {
		return "<div>★☆☆☆☆</div>";
	} else if (product.stars == 2) {
		return "<div>★★☆☆☆</div>";
	} else if (product.stars == 3) {
		return "<div>★★★☆☆</div>";
	} else if (product.stars == 4) {
		return "<div>★★★★☆</div>";
	} else if (product.stars == 5) {
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
