function addToShoppingcart(){
    if(model.inputs.shoppingCart.items[0].count == 0){
        changeValueFrom0To1Shoppingcart();
    }
}

function changeValueFrom0To1Shoppingcart(){
    model.inputs.shoppingCart.items[0].count += 1;
}