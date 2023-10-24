function carouselLeft() {
	let carousel = model.app.carousel;

	carousel > 0 ? carousel-- : (carousel = model.data.products.length - 1);

	model.app.carousel = carousel;

	viewApp();
}
function carouselRight() {
	let carousel = model.app.carousel;

	if (carousel < model.data.products.length - 1) carousel++;
	else carousel = 0;

	model.app.carousel = carousel;
	viewApp();
}
