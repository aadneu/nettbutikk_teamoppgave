function profileView() {
	let html = /*html*/ `
    <div class='centercontent'><div>MIN SIDE</div></div>
    <div class='centercontentprofile'><div>Du er innlogget som: ${model.app.currentUser}</div></div>
                
    <div class='profilediv'>
            <div id='venstre'>
        
            </div>
            <div id='midten'><div style='margin-bottom: 6%' class='profileheaders'>Brukeropplysninger</div>
        <div>${fetchUserInfo()}</div>
        <div>${showToggleButton()}</div></div>
            <div id='høyre'>
        <div class='profileheaders'>Mine ordrer:</div>
        <div>${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}</div>
            </div>
    </div>   
    `;

	return html;
}

function listUserInfo(){
    return !model.app.userEditMode
    ? `<div class='profileEditDiv'>
        <div>Navn: </div>${existingusers[i].name}
        <div>Email: </div>${existingusers[i].email}
        <div>Adresse: </div>${existingusers[i].address}
        <div>Postkode: </div>${existingusers[i].zipcode}
        <div>By: </div>${existingusers[i].city}
        <div>Mobil: </div>${existingusers[i].phone}
        </div>`
    : `<div class='profileEditDiv'>
        <div>Navn: </div> <input oninput='newuser.name = this.value' placeholder='${existingusers[i].name}' type="text"> 
        <div>Passord: </div><input oninput='newuser.password = this.value' placeholder="" type="password">
        <div>Gj. passord: </div><input oninput='newuser.repeatpassword = this.value' placeholder="" type="password">
        <div>Email: </div><input oninput='newuser.email = this.value' placeholder="${existingusers[i].email}" type="text">
        <div>Adresse: </div><input oninput='newuser.address = this.value' placeholder="${existingusers[i].address}" type="text">
        <div>Postkode: </div><input oninput='newuser.zipcode = this.value' placeholder="${existingusers[i].zipcode}" type="number">
        <div>By: </div><input oninput='newuser.city = this.value' placeholder="${existingusers[i].city}" type="text">
        <div>Mobil: </div><input oninput='newuser.phone = this.value' placeholder="${existingusers[i].phone}" type="text">
        </div>`;
    }

    function listOrders() {
        let orderList = "";
        for (let i = 0; i < model.data.profile.purchases.length; i++) {
            orderList += `<div><li>${model.data.profile.purchases[i]}</li></div>`;
        }
        return orderList;
    }