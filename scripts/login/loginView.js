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

function newUser(){
    let html = /*html*/ `
    <div>Fyll ut:</div>
    
    <div>Name: <input type="text"></div>
    <div>Password: <input type="password"></div>
    <div>Repeat password: <input type="password"></div>

    <div>Email: <input type="text"></div>
    <div>Adress: <input type="text"></div>
    <div>Zipcode: <input type="text"></div>
    <div>City: <input type="text"></div>
    <div>Phone: <input type="number"></div>
    <div><button>Lag ny bruker</button></div>
    `;
    return html;
}


