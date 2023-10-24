function mainView() {
	let html = ``;
	html = /*HTML*/ `
	<div style='display: flex' class='container'>
	<button onclick="carouselLeft()">←</button>
	<image id='leftpic' src="${
		model.data.products[
			model.app.carousel == 0
				? model.data.products.length - 1
				: model.app.carousel - 1
		].image
	}">
	<image src="${model.data.products[model.app.carousel].image}">
	<image id='leftpic' src="${
		model.data.products[
			model.app.carousel == model.data.products.length - 1
				? 0
				: model.app.carousel + 1
		].image
	}">
	<button onclick="carouselRight()">→</button>
	</div>
  <br>
  <div>
    <div class='preview'>
      <image src="${model.data.products[0].image}" style="">
      <div>${model.data.products[0].title}</div>
      <div>${model.data.products[0].description}</div>
      <div>${model.data.products[0].stars} stjerner</div>
      <div>${model.data.products[0].price},- NOK</div>
    </div>
  </div>
  `;
	return html;
}
