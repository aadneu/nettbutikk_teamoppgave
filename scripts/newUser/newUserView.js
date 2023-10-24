function newUserView() {
	let html = /*html*/ `
   <div class='centercontent'>
        <div>
        <div >Fyll inn</div>

        <div><input oninput='newuser.name = this.value' placeholder = 'Name' type="text"></div>
        <div><input oninput='newuser.password = this.value' placeholder = 'Password' type="password"></div>
        <div><input oninput='newuser.repeatpassword = this.value' placeholder = 'Repeat password'type="password"></div>
        <div><input oninput='newuser.email = this.value' placeholder = 'E-mail' type="text"></div>
        <br>
        <div class='smallerFontSize'> Valgfritt:</div>
        <div><input oninput='newuser.address = this.value' placeholder = 'Adress' type="text"></div>
        <div><input oninput='newuser.zipcode = this.value' placeholder = 'Zipcode' type="text"></div>
        <div><input oninput='newuser.city = this.value' placeholder = 'City' type="text"></div>
        <div><input oninput='newuser.phone = this.value' placeholder = 'Phone' type="number"></div>
        
        <div class='smallerFontSize'></div>

        <div><button type="button" onclick="createNewUser()">Opprett konto</button></div>
        </div>
    
    
    </div>
    `;
	return html;
}
