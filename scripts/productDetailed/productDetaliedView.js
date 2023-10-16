function productDetailedPageView() {
	let html = ``;
	html = /*HTML*/ `
    <div>
        <div class="productBox">
            <div class="title">${model.data.products[0].title}<div>
            <div class="description">>${model.data.products[0].description}<div>
            <div class="price">>${model.data.products[0].stars}<div>
            <div>${model.data.products[0].price}<div>
            <div>${model.data.products[0].instock}<div>
            <img src="${model.data.products[0].image}">
        </div>
    </div>
    `;
	return html;
}
