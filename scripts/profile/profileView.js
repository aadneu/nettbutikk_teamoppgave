function profileView() {
	let html = /*html*/ `
    <div class='profilecenter'>Min side overskrift</div>
    <div class='profilecenter'>Du er innlogget som: ${model.data.users[1].name}, ${model.data.users[1].email}</div>
    <div></div>
        
   
    <div class='profilecenter'>brukerinfomasjon</div>
    <div class='profilecenter'><button>Endre profil</button></div>
    <div class='profilecenter'>Ordrehistorikk:</div>
    <div >${listOrders()}</div>
    <div></div>
    `;

	return html;
}

