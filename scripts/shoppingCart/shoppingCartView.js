function shoppingCartView() {
	let html = /*HTML*/ `

<table class="shoppingTable">
<tr>
<th></th>
<th></th>
<th></th>
<th class="upperText">&nbsp; &nbsp; &nbsp; Antall</th>
<th class="upperText">Pris</th>
</tr>

`;
let items = model.inputs.shoppingCart.items;

for (let i = 0; i < items.length; i++) {
		html += /*HTML*/ `  
<tr>
<td><image class="cartImage" src= "${items[i].image}"></td>
<td class="item-title">${items[i].title}</td>
<td class="description-cell">${items[i].description}</td>

<td><button class="minus" onclick="removeItems(${i})">➖</button> 
<span><input type="text" class="customInput" id="count-${i}" value="${items[i].count}" readOnly></span>
<button class ="plus" onclick="addItems(${i})">➕</button>
</td>
<td class="pris">${items[i].price} </td> 
</tr>
`;
}

html += /*HTML*/ `
<tr class="emptyCart">
    <td colspan="3"></td>
    <td><u onclick="emptyAll()">Tøm handlevogn</u></td>
</tr>

${showNewPrice()}

<tr class="testings">
    <td colspan="3"></td>
    <td>Rabattkode:</td>
    <td><input onchange='model.inputs.shoppingCart.rabattkode = this.value, updateSum()' class="rabatt" type="text"></td>
</tr>

<tr class="testings">
<td colspan="4"></td>
<td colspan="2"><button onclick='makePurchase()' class="tilKassen">Kjøp</button></td>
</tr>
`;

	html += /*HTML*/ `
</table>
`;

	return html;
}

function showNewPrice() {
if (model.inputs.shoppingCart.rabattkode == model.data.shoppingCart.gyldigRabattkode){
    return /*HTML*/`
    <tr class="testings">
        <td colspan="3"></td>
        <td>Totalt:</td>
        <td>${model.inputs.shoppingCart.total * 10/((100-model.data.shoppingCart.rabattProsent)/10)} kr</td>
    </tr>

    <tr class="testings">
        <td colspan="3"></td>
        <td>Ny pris: (-${model.data.shoppingCart.rabattProsent}%)</td>
        <td>${model.inputs.shoppingCart.total} kr</td>
    </tr>
    `} else {
        return /*HTML*/`
        <tr class="testings">
            <td colspan="3"></td>
            <td>Totalt:</td>
        <td>${model.inputs.shoppingCart.total} kr</td>
    </tr>
    `}
}

