function newUserView() {
	let html = /*html*/ `
   <div class='centercontent'>
        <form id="userForm">
        <div >Fyll ut:</div>

        <div><input placeholder = 'name'>*</div>
        <div><input id='newpassword' placeholder = 'Password' type="password">*</div>
        <div><input id='newrepeatpassword' placeholder = 'Repeat password'type="password">*</div>
        <div><input id='newemail' placeholder = 'E-mail' type="text">*</div>
        <div><input placeholder = 'Adress' type="text"></div>
        <div><input placeholder = 'Zipcode' type="text"></div>
        <div><input placeholder = 'City' type="text"></div>
        <div><input placeholder = 'Phone' type="number"></div>
        
        <div class='smallerFontSize'>* Må fylles ut</div>

        <div><button type="button" onclick="createNewUser()">Lag ny bruker</button></div>
    </form>
    
    
    </div>
    `;
	return html;
}
