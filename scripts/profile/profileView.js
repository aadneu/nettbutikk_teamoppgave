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
    ? `<div>${existingusers[i].name}</div>
        <div>${existingusers[i].password}</div>
        <div>${existingusers[i].email}</div>
        <div>${existingusers[i].address}</div>
        <div>${existingusers[i].zipcode}</div>
        <div>${existingusers[i].city}</div>
        <div>${existingusers[i].phone}</div>`
    : `<div> <input placeholder = '${existingusers[i].name}' type="text"></div>  
        <div><input placeholder="${existingusers[i].password}" type="text"></div>
        <div><input placeholder="${existingusers[i].email}" type="text"></div>
        <div><input placeholder="${existingusers[i].address}" type="text"></div>
        <div><input placeholder="${existingusers[i].zipcode}" type="number"></div>
        <div><input placeholder="${existingusers[i].city}" type="text"></div>
        <div><input placeholder="${existingusers[i].phone}" type="text"></div>`;
    }