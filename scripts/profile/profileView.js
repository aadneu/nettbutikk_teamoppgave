function profileView() {
	let html = /*html*/ `
    <div class='centercontent'><div>MIN SIDE</div></div>
    <div class='centercontentprofile'><div>Du er innlogget som: ${model.app.currentUser}</div></div>
                
    <div class='profilediv'>
            <div id='venstre'>
        <div style='margin-bottom: 6%' class='profileheaders'>Brukeropplysninger</div>
        <div>${fetchUserInfo()}</div>
        <div><button>Endre opplysninger</button></div>
            </div>

            <div id='høyre'>
        <div class='profileheaders'>Mine ordrer:</div>
        <div>${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}</div>
            </div>
    </div>   
    `;

	return html;
}
