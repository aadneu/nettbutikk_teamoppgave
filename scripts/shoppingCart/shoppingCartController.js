function addItems(index) {
let moreItems = document.getElementById(`count-${index}`);
let currentCount = parseInt(moreItems.value);
moreItems.value = currentCount + 1;
model.inputs.shoppingCart.items[index].count = currentCount + 1;
updateSum();
}

function removeItems(index) {
let lessItems = document.getElementById(`count-${index}`);
let currentCount = parseInt(lessItems.value);

if (currentCount > 0) {
lessItems.value = currentCount - 1;
model.inputs.shoppingCart.items[index].count = currentCount - 1;
updateSum();
} 
}

function updateSum() {
let newTotalSum = 0;
let items = model.inputs.shoppingCart.items;

for (let i = 0; i < items.length; i++) {
newTotalSum += items[i].count * items[i].price;
}

model.inputs.shoppingCart.total = newTotalSum;
viewApp();

}

function emptyAll() {
let items = model.inputs.shoppingCart.items;
for (let i = 0; i < items.length; i++) {
items[i].count = 0;    //La total sum gå til 0 igjen.

let inputField = document.getElementById(`count-${i}`);
inputField.value = 0;  //Få inputfeltene med antall varer til å nullstille seg også.
}
updateSum();
}

function discount() {
let rabattkodeInput = document.getElementById('rabattkode');
let rabattkode = rabattkodeInput.value;

}

//Her kommer funksjonen til knapper