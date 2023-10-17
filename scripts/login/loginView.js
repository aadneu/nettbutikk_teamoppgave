function loginView() {
	let html = /*html*/ `
    
    <div>Brukernavn: <input type="text"></div>
    <div>Passord: <input type="password"></div>
    <div><button>Login</button> </div>
    <div><button>Registrer ny bruker</button> </div>
    <div> </div>
    `;

	return html;
}

function newUser(){
    let html = /*html*/ `
    Username: <input type="text">
    Name: <input type="text">
    Email: <input type="text">
    Adress: <input type="text">
    Zipcode: <input type="text">
    City: <input type="text">
    Phone: <input type="number">
 
    `;
    return html;
}
