function loginView() {
	let html = /*html*/ `
    <div class='centercontent'>
        
        <form id="userForm">
        <div>Innloggingsside</div>
        <br>
        <div class='smallerFontSize'>Skriv inn e-post og passord</div>
        <div style='color: red' class='smallerFontSizeRed'></div>

        <div><input oninput='model.inputs.login.email = this.value' placeholder = 'E-mail'></div>
        <div><input oninput='model.inputs.login.password = this.value' placeholder = 'Password' type="password"></div>
        <div class='smallerFontSize'>Husk meg: <input type="checkbox"></div>
        
        <div>
            <button onclick='loginButton()'>Login</button>
            <button onclick='changeView("newuser")'>Registrer ny bruker</button>
        </div>
        
    </div>
    `;

	return html;
}

function loginButton(){
    const login = model.inputs.login
    const users = model.data.users
    
    for (let i = 0; i < users.length; i++){
        if (login.email === users[i].email && login.password === users[i].password){
            model.app.loggedIn = true
            return true;
        } else {
            
        }
    }
    return false;
}






// function userLogin(){
//     const users = model.data.users

//     if (users.email[i] && users.password[i]){
        
//     }
// }

