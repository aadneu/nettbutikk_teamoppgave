function addToShoppingcart(index){
    let product = {...model.data.products[index]}
    let items = model.inputs.shoppingCart.items

    if (items.length == 0){
        product.count = 0;
        items.push(product)
    }
    
    for (let i = 0; i < items.length; i++){
        if (product.id == items[i].id){
            items[i].count++;
            updateSum();
            viewApp();
            return;
        } 
    }

    product.count = 1;
    items.push(product)
    
    updateSum();
    viewApp();
}
