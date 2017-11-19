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
 document.location="ajustes2.html"
}

//solo por prueba
function volverCancha() {
  document.location="ajustes2.html"
}

function cambiarClave() {
  //prueba
    console.log("cambiarClave");

    if($$('#newPass').val().length > 0 && $$('#newPassR').val().length > 0){
      if ($$('#newPass').val() == $$('#newPassR').val()) {
        console.log("Las Claves Son Iguales");
        //--------------------------------
        var Rut = localStorage.getItem("usr");
        var pass = $$('#newPass').val();
        myApp.showPreloader("Cambiando Clave");

        $$.ajax({
          url: 'https://cristobalsguttierrez.000webhostapp.com/cambiarContrasena.php',
          method: 'POST',
          dataType: 'json',
          data: {
          Rut: Rut,
          pass: pass
          },
          success: function(data){
            console.log("GG");
            if(data.resp){
              myApp.hidePreloader();
              localStorage.setItem("pss", $$('#newPass').val());
              myApp.alert("","Cambio De Clave Exitoso");
              document.location = "pPrincipal2.html";
              }else{
                myApp.hidePreloader();
                myApp.alert("LO SENTIMOS","No Se Pudo Realizar El Cambio De Clave");
              }
          },
          error: function(){
            console.log(Rut);
            myApp.hidePreloader();
            myApp.alert("El WS no ha respondido","Error");
          }
        });

        //--------------------------------
      }else {
        myApp.alert("","Las Claves Son Distintas");
      }
    }else {
      myApp.alert("","Debe llenar ambos campos");
    }
}

/*

*/
