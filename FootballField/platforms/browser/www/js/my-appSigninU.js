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

  //$$("#registrar").on("click", click_regis);
  $$("#volver").on("click", volverALogIn);
  document.addEventListener("backbutton", volver, false);
}

function volver(e){
 document.location="signin0.html"
}

//solo por prueba
function volverALogIn() {
  document.location="login.html"
}

/*

*/
