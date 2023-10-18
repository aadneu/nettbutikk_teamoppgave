function profileView() {
	let html = /*html*/ `
    <div>Min side overskrift</div>
    <div>Du er innlogget som: ${model.data.users[1].name} </div>
    <div>email: ${model.data.users[1].email} </div>
        
   
    <div>brukerinfomasjon</div>
    <div><button>Endre profil</button></div>
    <div>Ordrehistorikk:</div>
    <div>${listOrders()}</div>
    <div></div>
    `;

	return html;
}

