function mainView() {
	let html = ``;
	html = /*HTML*/ `
	<div style='display: flex' class='container'>
	<button>←</button>
	<image id='leftpic' src="${model.data.products[0].image}">
	<image src="${model.data.products[0].image}">
	<image id='leftpic' src="${model.data.products[0].image}">
	<button>→</button>
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
