const newuser = model.inputs.profile.newuser
const existingusers = model.data.users

let nameInput = newuser.name


// {/* <input onchange="model.inputs.profile.newuser.name = this.value" placeholder = 'name'> */}

function updateInput(value) { //kode fra chatgpt
    nameInput = value;
}

function createNewUser(){
    existingusers.push({
        name: nameInput,

    })
}






