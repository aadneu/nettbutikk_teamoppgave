function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<div><li>${model.data.profile.purchases[i]}</li></div>`;
	}
	return orderList;
}

function fetchUserInfo(){
	const existingusers = model.data.users
	let userobject = null
	for(i = 0; i < existingusers.length; i++){
		if(model.app.currentUser === existingusers[i].name){
			userobject =`${listUserInfo()}
				`;	
			break;
		}	
	}
	return userobject;
}

function showToggleButton(){
return !model.app.userEditMode
? `<button onclick='toggleEditMode()'>Endre opplysninger</button>`
: `<button onclick='toggleEditMode()'>Lagre</button>`

}

function toggleEditMode(){
	model.app.userEditMode = !model.app.userEditMode
	viewApp();
}