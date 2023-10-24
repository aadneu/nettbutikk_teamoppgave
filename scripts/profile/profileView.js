function profileView() {
	let html = /*html*/ `
    <div class='centercontent'>
        <div>Min side</div>
            <div>Du er innlogget som:
            <div>${model.data.users[1].name}</div>
            <div>${model.data.users[1].email}</div>
           </div>
        </div>
    
    
    <!-- <div class='profilecenter'>Min side overskrift</div>
    <div class='profilecenter'>Du er innlogget som: ${
			model.data.users[1].name
		}, ${model.data.users[1].email}</div>    
    <div class='profilecenter'>${showUserInfo()}</div>
    <div class='profilecenter'><button>Endre profil</button></div>
    <div class='profilecenter'>Ordrehistorikk:</div>
    <div >${listOrders()}</div>
    <div></div> -->
    `;

	return html;
}
