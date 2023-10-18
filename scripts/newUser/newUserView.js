function newUserView(){
    let html = /*html*/ `
    <div>Fyll ut:</div>
    
    <div>Name: <input onchange='createNewUser()' type="text">*</div>
    <div>Password: <input type="password">*</div>
    <div>Repeat password: <input type="password">*</div>
    <div>Email: <input type="text">*</div>
    <div>Adress: <input type="text"></div>
    <div>Zipcode: <input type="text"></div>
    <div>City: <input type="text"></div>
    <div>Phone: <input type="number"></div>
    <div>*Må fylles ut</div>
    <div><button>Lag ny bruker</button></div>
    `;
    return html;
}
