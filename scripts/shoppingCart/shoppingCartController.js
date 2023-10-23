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
let totalSum = 0;
let items = model.inputs.shoppingCart.items;

for (let i = 0; i < items.length; i++) {
totalSum += items[i].count * items[i].price;
}
let totalSumElement = document.getElementById('total-sum');
totalSumElement.textContent = `${totalSum.toFixed(2)} kr`;

}

function emptyCart() {
    
}

function discount() {
let rabattkodeInput = document.getElementById('rabattkode');
let rabattkode = rabattkodeInput.value;

}

//Her kommer funksjonen til knapper