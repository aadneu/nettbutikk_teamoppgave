function productListView() {
	let html = ``;

	//looper igjennom alle produkter, og viser frem alle som matcher den nåværende kategorien fra modellen

	for (let i = 0; i < model.data.products.length; i++) {
		let product = model.data.products[i];
		if (
			product.category.toLowerCase() == model.app.currentCategory.toLowerCase()
		) {
			html += /*html*/ `
      <div style="display:flex; justify-content:center; align-items: center ">
      <div><image src="${product.image}" style="width:200px"></div>
      <div><h4>${product.title}</h4> ${product.shortDesc}</div>
      <div>${product.price},- ink. mva <button onclick='viewProduct(${product.id})'>Vis</button></div>
      </div>
      `;
		}
	}
	return html;
}
