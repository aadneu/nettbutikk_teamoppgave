function productListView(category) {
	let html = ``;

	for (let i = 0; i < model.data.products.length; i++) {
		if (model.data.products[i].category.toLowerCase() == category) {
			html += /*html*/ `
      <div style="display:flex; justify-content:center; align-items: center ">
      <div><image src="${model.data.products[i].image}" style="width:200px"></div>
      <div><h4>${model.data.products[i].title}</h4> ${model.data.products[i].shortDesc}</div>
      <div>${model.data.products[i].price},- ink. mva <button>Vis</button></div>
      </div>
      `;
		}
	}
	return html;
}
