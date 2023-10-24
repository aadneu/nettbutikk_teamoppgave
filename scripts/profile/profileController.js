function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<div><li>${model.data.profile.purchases[i]}</li></div>`;
	}
	return orderList;
}



// function showUserInfo(){
// 	if (model.app.currentUser)
// }