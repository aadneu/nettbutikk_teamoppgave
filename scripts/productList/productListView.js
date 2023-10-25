function productListView() {
	let html = ``;

	for (let i = 0; i < model.data.products.length; i++) {
		if (
			model.data.products[i].category.toLowerCase() ==
			model.app.currentCategory.toLowerCase()
		) {
			let id = model.data.products[i].id;
			// console.log(id);
			html += /*html*/ `
      <div style="display:flex; justify-content:center; align-items: center ">
      <div><image src="${model.data.products[i].image}" style="width:200px"></div>
      <div><h4>${model.data.products[i].title}</h4> ${model.data.products[i].shortDesc}</div>
      <div>${model.data.products[i].price},- ink. mva <button onclick='viewProduct(${id})'>Vis</button></div>
      </div>
      `;
		}
	}
	return html;
}
