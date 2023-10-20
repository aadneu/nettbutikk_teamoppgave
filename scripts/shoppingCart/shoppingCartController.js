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

function emptyCart() {
    
}

//Her kommer funksjonen til knapper