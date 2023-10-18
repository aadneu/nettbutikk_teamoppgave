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
	let items = model.inputs.shoppingCart.items;

	for (let i = 0; i < items.length; i++) {
		html += /*HTML*/ `  
<tr>
<td><image src= "${items[i].image}"></td>
<td>${items[i].name}</td>
<td>${items[i].description}</td>
<td> Antall: ${items.count} </td> 
<td>${items[i].count}</td>          
<td> Pris: ${items[i].price} </td> 
<tr>
`;
	}

	html += /*HTML*/ `
</table>
`;
	return html;
}
