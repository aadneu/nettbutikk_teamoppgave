function productDetailedPageView() {
	let html = ``;
	html = /*HTML*/ `
    <div>
        <div>
            <div class="title">${model.data.products[0].title}</div>
			<div class="containerDescription">
            	<div class="description">${
						model.data.products[0].description
						}. <br>det smaker dejligt</div>
			</div>
            <div class="containerDet">
            	<div class="price">${model.data.products[0].price},- inkl. mva</div>
            	<button class="shoppingcart">Legg til i handlekurv🛒</button>
            	<div class="instock">${displayStockStatus()}</div>
            </div>
            <div class="stars">${displayStars()}</div>
            <img class="mainPicture" src="${model.data.products[0].image}">
        </div>
    </div>
    `;
	return html;
}
function displayStars() {
	if (model.data.products[0].stars == 1) {
		return "<div>★☆☆☆☆</div>";
	} else if (model.data.products[0].stars == 2) {
		return "<div>★★☆☆☆</div>";
	} else if (model.data.products[0].stars == 3) {
		return "<div>★★★☆☆</div>";
	} else if (model.data.products[0].stars == 4) {
		return "<div>★★★★☆</div>";
	} else if (model.data.products[0].stars == 5) {
		return "<div>★★★★★</div>";
	}
}

function displayStockStatus() {
	if (model.data.products[0].instock == true) {
		return "🟢 På lager";
	} 
	else{
		return "🔴 Ikke på lager"
	}
}
