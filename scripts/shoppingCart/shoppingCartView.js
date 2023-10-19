function shoppingCartView() {
	let html = /*HTML*/ `

<table class="shoppingTable">
<tr>
<th></th>
<th></th>
<th></th>
<th>Antall</th>
<th>Pris</th>
</tr>

`;
	let items = model.inputs.shoppingCart.items;

	for (let i = 0; i < items.length; i++) {
		html += /*HTML*/ `  
<tr>
<td><image class="cartImage" src= "${items[i].image}"></td>
<td>${items[i].name}</td>
<td class="description-cell">${items[i].description}</td>
<td><button class="minus" onclick="removeItems()">➖</button> 
<span><input type="text" class="customInput" value="${items[i].count}" readOnly></span>
<button class ="plus" onclick="addItems()">➕</button>
</td>
<td> Pris: ${items[i].price} </td> 
<tr>
`;
}

html += /*HTML*/ `
<tr>
	<td colspan="3"></td>
	<td>Totalt:</td>
	<td id="total-sum"></td>
	<tr>

    <td colspan="3"></td>
    <td>Rabattkode:</td>
    <td><input class="rabatt" type="text" id="rabattkode"></td>
	<tr>

	<td colspan="4"></td>
	<td colspan="2"><button class="kasseKlikk" onclick="goToCashier()">Til kassen</button></td>
</tr>
</tr>
</tr>
`;

	html += /*HTML*/ `
</table>
`;
	return html;
}
