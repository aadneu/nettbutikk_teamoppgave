function profileView() {
	let html = /*html*/ `
    <div>Min side overskrift</div>
    <div>Du er innlogget som: ${model.inputs.profile.user.name} </div>
    <div>email: ${model.inputs.profile.user.email} </div>
        
   
    <div>en loop med userinfo?</div>
    <div><button>Endre profil</button></div>
    <div>Ordrehistorikk:</div>
    <div>${listOrders()}</div>
    <div>${viewList()}</div>
    `;

	return html;
}

function viewList(){
    let viewlist = '';
    for(let i = 0; i < model.app.pages.length; i++){
        viewlist += `<div><button onclick='changeView("${model.app.pages[i]}")'>${model.app.pages[i]}</button></div>`

    }
    return viewlist
}