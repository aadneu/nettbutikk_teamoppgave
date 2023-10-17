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

for (let i = 0; i < model.shoppingcart.items.lenght; i++) {
    
html += /*HTML*/ `  
<tr>
<div class="cart-item">
<td><img src= "${model.shoppingCart.length[i].image}"></td>
<td>${model.shoppingcart.items[i].name}</td>
<td>${model.shoppingcart.items[i].description}</td>
<td> Antall: ${model.shoppingcart.items.count} </td> 
<td>${model.shoppingcart.items[i].count}</td>          
<td> Pris: ${model.shoppingcart.items[i].price} </td> 
</div>
<tr>
`;
}

html += /*HTML*/ `
</table>
`;
return html;
}
