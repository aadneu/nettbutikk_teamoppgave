function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<div class='profilecenter'><li>${model.data.profile.purchases[i]}</li></div>`;
	}
	return orderList;
}

function showUserInfo(){
	const userEntries = Object.entries(model.data.users[1])
	return userEntries
}
