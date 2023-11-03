function mainView() {
	let html = ``;

	html += createCarouselHTML();

	html += `<div class='previews'>${createPreviewsHTML()}</div>`;

	return html;
}

function createPreviewsHTML() {
	let html = "";
	for (let i = 0; i < model.data.products.length; i++) {
		html += /*HTML*/ `
		
    <div class='preview'>
		<image src="${model.data.products[i].image}" onclick='viewProduct(${model.data.products[i].id})'>
		<div>${model.data.products[i].title}</div>
		<div>${model.data.products[i].shortDesc}</div>
		<div>${displayStars(model.data.products[i])}</div>
		<div>${model.data.products[i].price},- NOK <button onclick='viewProduct(${model.data.products[i].id})'>Vis</button></div>
    </div>
		
		`;
	}
	return html;
}

function createCarouselHTML() {
	//setter index til bildet på venstre side til -1 av det i midten, med mindre midt-indexen er 0, da settes denne til det siste i arrayet.
	let leftIndex =
		model.data.products[
			model.app.carousel == 0
				? model.data.products.length - 1
				: model.app.carousel - 1
		];

	//setter index til bildet på høyre side til +1 av det i midten, med mindre midt-indexen er det siste i arrayet, da settes denne til 0.
	let rightIndex =
		model.data.products[
			model.app.carousel == model.data.products.length - 1
				? 0
				: model.app.carousel + 1
		];

	//Lager en div med 2 knapper og 3 bilder i, som kan rullere frem og tilbake, med links til de respektive produktene.
	let html = /*HTML*/ `
	<div class='container' >
	<button onclick="carouselLeft()">←</button>
	<image onclick='viewProduct(${leftIndex.id})' class='sidepic' src="${
		leftIndex.image
	}">
	<image onclick='viewProduct(${
		model.data.products[model.app.carousel].id
	})'  src="${model.data.products[model.app.carousel].image}">
	<image onclick='viewProduct(${rightIndex.id})' class='sidepic' src="${
		rightIndex.image
	}">
	<button onclick="carouselRight()">→</button>
	</div>
  <br>
	`;
	return html;
}
