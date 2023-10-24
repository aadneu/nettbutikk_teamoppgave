let outputLogin = '';

function loginButton(){
    const login = model.inputs.login
    const users = model.data.users
    for (let i = 0; i < users.length; i++){
        if (login.email === users[i].email && login.password === users[i].password){
            model.app.loggedIn = true;
            changeView('main')
            outputLogin = ''
            break;
        } else { model.app.loggedIn = false; 
        outputLogin = 'Feil brukernavn/passord'
        viewApp();
        }
        }
    }