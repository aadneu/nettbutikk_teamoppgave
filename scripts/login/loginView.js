function loginView() {
	let html = /*html*/ `
    <div class='centercontent'>
        
        <div>
        <div>Innloggingsside</div>
        <br>
        <div class='smallerFontSize'>Skriv inn e-post og passord</div>
        <div style='color: red' class='smallerFontSizeRed'>${outputLogin}</div>

        <div><input oninput='model.inputs.login.email = this.value' placeholder = 'E-mail'></div>
        <div><input oninput='model.inputs.login.password = this.value' placeholder = 'Password' type="password"></div>
        
        <div class='smallerFontSize'>Husk meg: <input type="checkbox"></div>
        
        <div>
            
            <button onclick='loginButton()'>Login</button>
            <button onclick='changeView("newuser")'>Registrer ny bruker</button>
        </div>
        </div>
    </div>
    `;

	return html;
}
let outputLogin = '';


function loginButton(){
    const login = model.inputs.login
    const users = model.data.users
    
    for (let i = 0; i < users.length; i++){
        if (login.email === users[i].email && login.password === users[i].password){
            model.app.loggedIn = true;
            changeView('main')
            outputLogin = ''
            break;
        } else { model.app.loggedIn = false; 
        outputLogin = 'Feil brukernavn/passord'
        viewApp();
        }
    
    }
    
}






// function userLogin(){
//     const users = model.data.users

//     if (users.email[i] && users.password[i]){
        
//     }
// }

