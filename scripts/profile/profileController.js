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

function listUserInfo(){
	let html = `
	<div>${existingusers[i].name}</div>
	<div>${existingusers[i].password}</div>
	<div>${existingusers[i].email}</div>
	<div>${existingusers[i].address}</div>
	<div>${existingusers[i].zipcode}</div>
	<div>${existingusers[i].city}</div>
	<div>${existingusers[i].phone}</div> 
	`;
	return html;
}