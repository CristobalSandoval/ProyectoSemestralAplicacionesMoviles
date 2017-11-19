// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

//var fecha = new Date("2017-10-21");

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");

  $$("#btnreservar").on("click", reservarCancha);
  $$("#volver").on("click", volverARes);
  document.addEventListener("backbutton", volver, false);
}

function reservarCancha() {
  var fecha = $$('#dia').val();
  var idCancha = localStorage.getItem("idCancha");

  //var Nom = $$('#nombreCliente').val();
  //var Ape = $$('#apellidoCliente').val();
  //var Cor = $$('#email').val();
  var Rut = $$('#rutCliente').val();
  var HoI = $$('#horaI').val();
  var HoF = $$('#horaF').val();
  var idRes = $$('#idRes').val();

  var duracion = HoF - HoI;

  myApp.showPreloader("Ingresando Datos");

  if( Rut.length > 0 && HoI.length > 0 && HoF.length > 0 && idRes.length > 0 && fecha.length > 0){
    $$.ajax({
      url: 'https://cristobalsguttierrez.000webhostapp.com/hacerReserva.php',
      method: 'POST',
      dataType: 'json',
      data: {
        Rut: Rut,
        HoI: HoI,
        idCancha: idCancha,
        duracion: duracion,
        fecha: fecha,
        idRes: idRes
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          myApp.alert("","Reserva realizada Con Exito");
          //myApp.alert("Registro Exitoso","Enhorabuena");
          document.location = "pPrincipal2.html";
          }else{
            myApp.alert(data.info,"No Se Puedo Realizar La Reserva");
          }
      },
      error: function(){
        myApp.hidePreloader();
        myApp.alert("El WS no ha respondido","Error");
      }
    });

  }else {
    myApp.hidePreloader();
    myApp.alert("","Debe rellenar todos los campos");
  }

}

function volver(e){
 document.location="VReservaD.html"
}

//solo por prueba
function volverARes() {
  document.location="VReservaD.html"
}

/*

*/
