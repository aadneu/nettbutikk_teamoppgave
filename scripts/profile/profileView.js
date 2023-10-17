function profileView() {
	let html = /*html*/ `
    <div>Min side overskrift</div>
    <div>Du er innlogget som: ${model.inputs.profile.user.name} </div>
    <div>email: ${model.inputs.profile.user.email} </div>
        
   
    <div>en loop med userinfo?</div>
    <div><button>Endre profil</button></div>
    <div>Ordrehistorikk:</div>
    <div>${listOrders()}</div>
    `;

	return html;
}

function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<li>${model.data.profile.purchases[i]}</li>`;
	}
	return orderList;
}
