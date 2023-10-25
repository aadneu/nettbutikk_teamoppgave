function profileView() {
	let html = /*html*/ `
    <div class='centercontent'><div>MIN SIDE</div></div>
    <div class='centercontentprofile'><div>Du er innlogget som: ${model.app.currentUser}</div></div>
                
    <div class='profilediv'>
            <div id='venstre'>
        <div class='profileheaders'>Brukeropplysninger</div>
        <div>Liste med navn, nummer, etc.</div>
        <div><button>knapp for å endre brukerinformasjon</button></div>
            </div>

            <div id='høyre'>
        <div class='profileheaders'>Mine ordrer:</div>
        <div>${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}${listOrders()}</div>
            </div>
    </div>   
        
    

    `;

	return html;
}
