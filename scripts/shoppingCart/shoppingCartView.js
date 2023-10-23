function shoppingCartView() {
	let html = /*HTML*/ `

<table class="shoppingTable">
<tr>
<th></th>
<th></th>
<th></th>
<th>&nbsp; &nbsp; Antall</th>
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

<td><button class="minus" onclick="removeItems(${i})">➖</button> 
<span><input type="text" class="customInput" id="count-${i}" value="${items[i].count}" readOnly></span>
<button class ="plus" onclick="addItems(${i})">➕</button>
</td>
<td>${items[i].price} </td> 
<tr>
`;
}

html += /*HTML*/ `
<tr class="emptyCart">
    <td colspan="4"></td>
    <td><u>Tøm handlevogn</u></td>
</tr>

<tr class="testings">
    <td colspan="3"></td>
    <td>Totalt:</td>
    <td id="total-sum"></td>
</tr>
<tr class="testings">
    <td colspan="3"></td>
    <td>Rabattkode:</td>
    <td><input class="rabatt" type="text" id="rabattkode" placeholder="Aalto23"></td>
</tr>
<tr class="testings">
    <td colspan="4"></td>
    <td colspan="2"><button class="kasseKlikk" onclick="goToCashier()">Til kassen</button></td>
</tr>
`;

	html += /*HTML*/ `
</table>
`;
	return html;
}
