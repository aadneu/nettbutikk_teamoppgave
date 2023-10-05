let app = document.getElementById('app');

viewApp();
function viewApp() {

  let html
  if (model.app.currentView == 'mainPage'){
    html = /*HTML*/`
    <image src='${model.data.logo}'>
    <input type='text' placeholder='Søk'>
    <button>🔍</button>
   `;

  } else if (model.app.currentView == 'side1') {
    html = side1()
  }


  app.innerHTML = html;
 
}

function side1(){
    let html = `
  sadfasdf
    `;
    return html;
}