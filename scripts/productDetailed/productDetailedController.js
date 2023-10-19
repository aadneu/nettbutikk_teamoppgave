function displayStars(){
    if(model.data.products[0].stars == 1){
        return"<div>★</div>"
    }
    else if(model.data.products[0].stars == 2){
        return"<div>★★</div>"
    }
    else if(model.data.products[0].stars == 3){
        return"<div>★★★</div>"
    }
    else if(model.data.products[0].stars == 4){
        return"<div>★★★★</div>"
    }
    else if(model.data.products[0].stars == 5){
        return"<div>★★★★★</div>"
    }
}