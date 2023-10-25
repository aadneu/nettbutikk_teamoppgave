function viewProduct(id) {
	let products = model.data.products;

	for (let i = 0; i < products.length; i++) {
		console.log("argID: " + id, "loopID: " + products[i].id);
		if (products[i].id == id) model.app.currentProduct = i;
	}

	model.app.currentView = "productDetailed";
	console.log(model.app.currentProduct);
	viewApp();
}
