const newuser = model.inputs.profile.newuser;
const existingusers = model.data.users;
let outputNewUser = "";

const userCreator = (name, password, email, address, zipcode, city, phone) => {
  return { name, password, email, address, zipcode, city, phone };
};

function addNewUser() {
  existingusers.push(
    userCreator(
      newuser.name,
      newuser.password,
      newuser.email,
      newuser.address,
      newuser.zipcode,
      newuser.city,
      newuser.phone
    )
  );
}

function createNewUser() {
  if (newuser.password === newuser.repeatpassword) {
    let emailexists = false;
    for (let i = 0; i < existingusers.length; i++) {
      if (newuser.email === existingusers[i].email) {
        emailexists = true;
        break;
      }
    }
    if (!emailexists) {
      addNewUser();
    } else {
      outputNewUser = "Denne emailen er allerede i bruk!";
    }
  } else { outputNewUser = 'Passordene må være like!'}
  viewApp();
}
