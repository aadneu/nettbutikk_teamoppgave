function profileView() {
	let html = /*html*/ `
    <div>Min side overskrift</div>
    <div>Du er innlogget som: ${model.inputs.profile.user.name} </div>
    <div>email: ${model.inputs.profile.user.email} </div>
        
   
    <div>en loop med userinfo?</div>
    <div><button>Endre profil</button></div>
    <div>Ordrehistorikk:</div>
    <div>${listOrders()}</div>
    <div></div>
    `;

	return html;
}

