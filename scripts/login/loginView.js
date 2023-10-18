function loginView() {
	let html = /*html*/ `
    <div id='loginview'>
        <div>Brukernavn: <input type="text"></div>
        <div>Passord: <input type="password"></div>
        <div>Husk meg: <input type="checkbox"></div>
        <div><button>Login</button> </div>
        <div><button onclick='changeView("newuser")'>Registrer ny bruker</button> </div>
    </div>
    `;

	return html;
}



