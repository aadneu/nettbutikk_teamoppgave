function shoppingCartView() {
let html = /*HTML*/ `

<table>
<tr>
<th>Bilde</th>
<th>Navn</th>
<th>Beskrivelse</th>
<th>Antall</th>
<th>Pris</th>
</tr>

`;

// Ignorer alt rotet hvis dere ser dette, jeg har en plan   :DDDD
html += /*HTML*/ `  

<tr>
<div class="cart-item">
<td><img src= "${model.shoppingcart.items[i].image}"></td>
<td>${model.shoppingcart.items[i].name}</td>
<p>${model.shoppingcart.items[i].description}</p>
<div> Antall: ${model.shoppingcart.items.count} </div> 
<div>${model.shoppingcart.items[i].count}</div>          
<div> Pris: </div> 
</div>
<tr>
`;

return html;
}
