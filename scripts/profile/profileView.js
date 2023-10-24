function profileView() {
	let html = /*html*/ `
    <div class='centercontent'>
        <div>
            <div>MIN SIDE</div>
                <div>Du er innlogget som: ${model.app.currentUser}</div>
                <div>En div med brukerinformasjon</div>
                <div><button>knapp for å endre brukerinformasjon</button></div>
                <div>Mine ordrer</div>
                <div>${listOrders()}</div>
            </div>
        </div>
    

    `;

	return html;
}
