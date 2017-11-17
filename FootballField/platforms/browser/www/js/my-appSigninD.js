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

  $$("#registrar").on("click", click_regis);
  $$("#volver").on("click", volverALogIn);
  document.addEventListener("backbutton", volver, false);
}

function volver(e){
 document.location="login.html"
}

function click_regis() {
  console.log("click");
  var Nom = $$('#nombre').val();
  var Ape = $$('#apellido').val();
  var Correo = $$('#email').val();
  var Fon = $$('#fono').val();
  var Run = $$('#Rut').val();
  var pass = $$('#pass').val();

  myApp.showPreloader("Registrando");

  if(Nom.length > 0 && Ape.length > 0 && Correo.length > 0 && Fon.length > 0 && Run.length > 0 && pass.length > 0){
    $$.ajax({
      url: 'https://cristobalsguttierrez.000webhostapp.com/signin.php',
      method: 'POST',
      dataType: 'json',
      data: {
        nombre: Nom,
        apellido: Ape,
        email: Correo,
        fono: Fon,
        rut: Run,
        pass: pass
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          myApp.showPreloader("Registro Exitoso");
          //myApp.alert("Registro Exitoso","Enhorabuena");
          document.location = "index.html";
          }else{
            $$('#nombre').val(value = "");
            $$('#apellido').val(value = "");
            $$('#email').val(value = "");
            $$('#fono').val(value = "");
            $$('#Rut').val(value = "");
            $$('#pass').val(value = "");
            myApp.alert(data.info,"No Se Puedo Realizar El Registro");
          }
      },
      error: function(){
        myApp.hidePreloader();
        myApp.alert("El WS no ha respondido","Error");
      }
    });
  }else{
    myApp.hidePreloader();
    myApp.alert("Debe llenar los campos","Advertencia");
  }
}



//solo por prueba
function volverALogIn() {
  document.location="login.html"
}

/*

*/
