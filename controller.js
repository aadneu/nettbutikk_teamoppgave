function changeView(pageid){
    model.app.currentView = pageid
    viewApp();
}

function viewList(){
    let viewlist = '';
    for(let i = 0; i < model.app.pages.length; i++){
        viewlist += `<div><button onclick='changeView("${model.app.pages[i]}")'>${model.app.pages[i]}</button></div>`

    }
    return viewlist
}