function setCategory(category) {
	model.app.currentCategory = category;
	model.app.currentView = "productList";
	viewApp();
}
