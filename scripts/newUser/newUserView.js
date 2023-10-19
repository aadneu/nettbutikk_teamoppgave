function newUserView(){
    let html = /*html*/ `
    <!-- <div>Fyll ut:</div>
    
    <div>Name: <input id='newname' type="text">*</div>
    <div>Password: <input id='newpassword'  type="password">*</div>
    <div>Repeat password: <input id='newrepeatpassword' type="password">*</div>
    <div>Email: <input id='newemail'  type="text">*</div>
    <div>Adress: <input type="text"></div>
    <div>Zipcode: <input type="text"></div>
    <div>City: <input type="text"></div>
    <div>Phone: <input type="number"></div>
    <div>*Må fylles ut</div>
    <div><button onclick='createNewUser()'>Lag ny bruker</button></div> -->

    <div>Fyll ut:</div>
<form id="userForm">
    <div><input onchange="model.inputs.profile.newuser.name = this.value" placeholder = 'name'></div>

  <button type="button" onclick="createNewUser()">Lag ny bruker</button>
</form>

    `;
    return html;
}
