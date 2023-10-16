function mainView() {
	let html = ``;
	html = /*HTML*/ `
	<div style='display: flex'>
	<button>←</button>
	<image src="${model.data.products[0].image}">
	<button>→</button>
	</div>
  <br>
  <div>
    <div>
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
