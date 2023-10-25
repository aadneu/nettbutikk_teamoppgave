function profileView() {
	let html = /*html*/ `
    <div class='centercontent'><div>MIN SIDE</div></div>
    <div class='centercontentprofile'><div>Du er innlogget som: ${model.app.currentUser}</div></div>
                
    <div class='profilediv'>
            <div id='venstre'>
        <div style='margin-bottom: 6%' class='profileheaders'>Brukeropplysninger</div>
        <div>${fetchUserInfo()}</div>
        <div>${showToggleButton()}</div>
            </div>

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
        <div>Navn: ${existingusers[i].name}</div>
        <div>Email: ${existingusers[i].email}</div>
        <div>Adresse: ${existingusers[i].address}</div>
        <div>Postkode: ${existingusers[i].zipcode}</div>
        <div>By: ${existingusers[i].city}</div>
        <div>Mobil: ${existingusers[i].phone}</div>
        </div>`
    : `<div class='profileEditDiv'>
        <div>Navn: <input oninput='newuser.name = this.value' placeholder='${existingusers[i].name}' type="text"></div>  
        <div>Passord: <input oninput='newuser.password = this.value' placeholder="" type="password"></div>
        <div>Gj. passord: <input oninput='newuser.repeatpassword = this.value' placeholder="" type="password"></div>
        <div>Email: <input oninput='newuser.email = this.value' placeholder="${existingusers[i].email}" type="text"></div>
        <div>Adresse: <input oninput='newuser.address = this.value' placeholder="${existingusers[i].address}" type="text"></div>
        <div>Postkode: <input oninput='newuser.zipcode = this.value' placeholder="${existingusers[i].zipcode}" type="number"></div>
        <div>By: <input oninput='newuser.city = this.value' placeholder="${existingusers[i].city}" type="text"></div>
        <div>Mobil: <input oninput='newuser.phone = this.value' placeholder="${existingusers[i].phone}" type="text"></div>
        </div>`;
    }

    function listOrders() {
        let orderList = "";
        for (let i = 0; i < model.data.profile.purchases.length; i++) {
            orderList += `<div><li>${model.data.profile.purchases[i]}</li></div>`;
        }
        return orderList;
    }