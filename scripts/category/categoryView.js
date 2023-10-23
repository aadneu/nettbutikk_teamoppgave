function categoryView() {
	let html = ``;
	for (let i = 0; i < model.data.categories.length; i++) {
		html += /*HTML*/ `
      <div> <a href="javascript:setCategory('${model.data.categories[i]}')"> ${model.data.categories[i]} <a></div>
      `;
	}
	return html;
}
