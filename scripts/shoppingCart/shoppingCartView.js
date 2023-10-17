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

for (let i = 0; i < model.shoppingcart.items.length; i++) {
    
html += /*HTML*/ `  
<tr>
<td><img src= "${model.shoppingCart.items.length[i].image}"></td>
<td>${model.shoppingcart.items[i].name}</td>
<td>${model.shoppingcart.items[i].description}</td>
<td> Antall: ${model.shoppingcart.items.count} </td> 
<td>${model.shoppingcart.items[i].count}</td>          
<td> Pris: ${model.shoppingcart.items[i].price} </td> 
<tr>
`;
}

html += /*HTML*/ `
</table>
`;
return html;
}
