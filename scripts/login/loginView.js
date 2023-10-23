function loginView() {
	let html = /*html*/ `
    <div class='centercontent'>
        
        <form id="userForm">
        <div>Innloggingsside</div>
        <br>
        <div class='smallerFontSize'>Skriv inn e-post og passord</div>

        <div><input placeholder = 'E-mail'></div>
        <div><input id='newpassword' placeholder = 'Password' type="password"></div>
        <div class='smallerFontSize'>Husk meg: <input type="checkbox"></div>
        
        <div>
            <button>Login</button>
            <button onclick='changeView("newuser")'>Registrer ny bruker</button>
        </div>
        
    </div>
    `;

	return html;
}


function userLogin(){
    const users = model.data.users

    if (users.email[i] && users.password[i]){
        
    }
}

