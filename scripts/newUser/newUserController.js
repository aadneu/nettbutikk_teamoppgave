const newuser = model.inputs.profile.newuser
const existingusers = model.data.users


const userCreator = (name, password, email, address, zipcode, city, phone) => {
    return { name, password, email, address, zipcode, city, phone }
    }

function addNewUser(){
 existingusers.push(userCreator(
        newuser.name, 
        newuser.password, 
        newuser.email, 
        newuser.address,
        newuser.zipcode,
        newuser.city,
        newuser.phone))
}

function createNewUser(){
    if(newuser.password === newuser.repeatpassword){
        addNewUser();
    }
}







