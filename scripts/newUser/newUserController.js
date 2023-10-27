const newuser = model.inputs.profile.newuser;
const existingusers = model.data.users;
let outputNewUser = "";

const userCreator = ( name,  password,  email,  address,  zipcode,  city,  phone,  customerid) => {
  return { name, password, email, address, zipcode, city, phone, customerid };
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
      newuser.phone,
      newuser.customerid
    )
  );
}

function createNewUser() {
  if (newuser.password === newuser.repeatpassword) {
    let infoexists = false;
    for (let i = 0; i < existingusers.length; i++) {
      if (newuser.email === existingusers[i].email && newuser.name === existingusers[i].name) {
        infoexists = true;
        break;
      }
    }
    if (infoexists) {
      addNewUser();
      model.app.currentView = "login";
    } else {
      outputNewUser = "Email eller brukernavn er allerede i bruk!";
    }
  } else {
    outputNewUser = "Passordene må være like!";
  }

  viewApp();
}

// function customeridFunction() {
//   for (i = 0; 0 < existingusers.length; i++) {
//     if (existingusers[i].customerid >= existingusers[2].customerid) {
//       existingusers[i].customerid = existingusers[i].customerid++;
//     }
//   }
//   return;
// }
