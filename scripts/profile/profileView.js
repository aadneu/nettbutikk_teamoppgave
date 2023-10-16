function profileView() {
	let html = /*html*/ `
    <div>Min side overskrift</div>
    <div>
        Du er innlogget som: ${model.inputs.profile.user.username}, 
        email: ${model.inputs.profile.user.email}
        kunde.nr   
    </div>
    <div><button>Endre profil</button></div>
    <div>en loop med userinfo?</div>
    <div>Ordrehistorikk</div>
    <div>liste med ordrer${listOrders()}</div>
    `;

	return html;
}

function listOrders() {
	let orderList = "";
	for (let i; i < model.data.profile.purchases.length; i++) {
		orderList += `${model.data.profile.purchases.length[i]}`;
	}
	return orderList;
}
