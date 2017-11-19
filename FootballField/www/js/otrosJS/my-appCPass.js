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
  $$("#volver").on("click", volverCancha);
  $$("#cClave").on("click", cambiarClave);
  document.addEventListener("backbutton", volver, false);
}

function volver(e){
 document.location="ajustes.html"
}
//que ajustes me traiga hasta aca
//solo por prueba
function volverCancha() {
  document.location="ajustes.html"
}

function cambiarClave() {
  //prueba
    console.log("cambiarClave");
  if($$('#newPass').val().length > 0 && $$('#newPassR').val().length > 0){
    if ($$('#newPass').val() == $$('#newPassR').val()) {
      console.log("Las Claves Son Iguales");
      $$('#newPass').val(value = "");
      $$('#newPassR').val(value = "");
    }else {
      console.log("Las Claves Son Distintas");
      $$('#newPass').val(value = "");
      $$('#newPassR').val(value = "");
    }
  }else {
    console.log("Debe llenar ambos campos");
    $$('#newPass').val(value = "");
    $$('#newPassR').val(value = "");
  }
}

/*

*/
