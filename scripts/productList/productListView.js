function productListView() {
	let html = /*html*/ `
    <div style="display:flex; justify-content:center; align-items: center ">
      <div>${model.data.products[0].title}</div>
      <div><image src="${model.data.products[0].image}" style="width:200px"></div>
      <div>${model.data.products[0].shortDesc}   *stort mellomrom*   ${model.data.products[0].price},- ink. mva <button>Vis</button></div>
    </div>
    <div style="display:flex; justify-content:center; align-items: center ">
      <div>${model.data.products[0].title}</div>
      <div><image src="${model.data.products[0].image}" style="width:200px"></div>
      <div>${model.data.products[0].shortDesc}   *stort mellomrom*   ${model.data.products[0].price},- ink. mva <button>Vis</button></div>
    </div>
    `;
	return html;
}
