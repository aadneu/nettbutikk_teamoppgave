function productListView() {
	let html = ``;

	//looper igjennom alle produkter, og viser frem alle som matcher den nåværende kategorien fra modellen

	for (let i = 0; i < model.data.products.length; i++) {
		let product = model.data.products[i];
		if (
			product.category.toLowerCase() == model.app.currentCategory.toLowerCase() || model.app.currentCategory == 'Alle produkter'
		) {
			html += /*html*/ `
				<div class='listItem'>
					<div class='listTitle'>${product.title}</div>
					<div class='listImage'><image src="${product.image}" style="width:200px"></div>
					<div class='listDescription'>${product.description}</div>
					<div class='listPrice'>${product.price},- ink. mva 
							
								<button onclick='viewProduct(${product.id})'>Vis</button>
								<button onclick='addToShoppingcart(${i})'>+🛒</button>
							
							
					</div>
					<div class='listStars'>${displayStars(product)}</div>
				</div>
      `;
		}
	}
	return html;
}
