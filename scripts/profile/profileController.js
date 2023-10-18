function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<li>${model.data.profile.purchases[i]}</li>`;
	}
	return orderList;
}

function listUserInfo(){
	let userInfo = '';
	for(let i = 0; i < model.data.users.length; i++){
	userInfo += model.data.users[1]}
	return userInfo
}