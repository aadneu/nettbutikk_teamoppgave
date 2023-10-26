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
: `<button onclick='toggleEditMode()'>Tilbake</button>
	<button onclick='saveUserChanges()'>Lagre</button>`
}


function toggleEditMode(){
	model.app.userEditMode = !model.app.userEditMode
	viewApp();
}

function saveUserChanges(){
	const existingusers = model.data.users
	for(i = 0; i < existingusers.length; i++){
		if(model.app.currentUser === existingusers[i].name){
			existingusers[i].name = newuser.name
			existingusers[i].password = newuser.password
			existingusers[i].email = newuser.email
			existingusers[i].address = newuser.address 
			existingusers[i].zipcode = newuser.zipcode
			existingusers[i].city = newuser.city
			existingusers[i].phone = newuser.phone 
	  }
	}
	model.app.currentUser = newuser.name
	toggleEditMode();
	viewApp();
}
	
	
