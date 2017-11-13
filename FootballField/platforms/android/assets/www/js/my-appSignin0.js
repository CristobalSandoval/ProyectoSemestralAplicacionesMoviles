// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");

  $$("#ingCod").on("click", click_ingCod);
  $$("#volver").on("click", volverALogIn);
  document.addEventListener("backbutton", volver, false);
}

function click_ingCod(){
  if (($$('#codigo').val()).length > 0) {
    if ($$('#codigo').val() == 619) {
      document.location="signinD.html"
    }else {
      document.location="signinU.html"
    }
  }else {
    myApp.hidePreloader();
    myApp.alert("Debe Ingresar Un Codigo","Advertencia");
  }
}

function volver(e){
 document.location="login.html"
}

//solo por prueba
function volverALogIn() {
  document.location="login.html"
}

/*

*/
