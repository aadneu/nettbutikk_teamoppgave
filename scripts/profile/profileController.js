function listOrders() {
	let orderList = "";
	for (let i = 0; i < model.data.profile.purchases.length; i++) {
		orderList += `<li>${model.data.profile.purchases[i]}</li>`;
	}
	return orderList;
}
