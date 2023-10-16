function shoppingCartView() {
	let html = ``;

	html = /*HTML*/ `
<div class="cart-item">
<img src= "${model.shoppingcart.items.image}">
<h3>${model.shoppingcart.items.name}</h3>
<p>${model.shoppingcart.items.description}</p>
<div> Antall: ${model.shoppingcart.items.count} </div>
<div> Pris: </div> 

</div>

`;
}
