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

if (model.inputs.shoppingCart.rabattkode == model.data.shoppingCart.gyldigRabattkode) {
    newTotalSum = newTotalSum * (100 - model.data.shoppingCart.rabattProsent)/100
}

model.inputs.shoppingCart.total = newTotalSum;
viewApp();

}

function emptyAll() {
let items = model.inputs.shoppingCart.items;
items.splice(0, items.length);
model.inputs.shoppingCart.rabattkode = '';
updateSum();
}
