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

  $$("#btnreservar").on("click", reservarCancha);
  $$("#volver").on("click", volverARes);
  document.addEventListener("backbutton", volver, false);
}

function volver(e){
 document.location="VReserva.html"
}

//solo por prueba
function volverARes() {
  document.location="VReserva.html"
}


function reservarCancha() {

  var idCancha = localStorage.getItem("idCancha");

  var Nom = $$('#nombreCliente').val();
  var Ape = $$('#apellidoCliente').val();
  var Cor = $$('#email').val();
  var Rut = $$('#rutCliente').val();
  var fecha = $$('#dia').val();
  var HoI = $$('#horaI').val();
  var HoF = $$('#horaF').val();

  var duracion = HoF - HoI;


  //console.log(sms);
  if(Nom.length > 0 && Ape.length > 0 && Cor.length > 0 && Rut.length > 0 && HoI.length > 0 && HoF.length > 0 && fecha.length > 0){
    myApp.showPreloader("Enviando Reserva");
    var sms = "Don "+Nom+" "+Ape+" con rut "+Rut+" quiere solicitar su cancha el dia "+fecha+" a partir de las "+HoI+":00 hasta las "+HoF+":00. \nEl correo del cliente es: "+Cor+"\n\n\nSaludos.";
    var asunto = "Solicitud de cancha [FootfallField]";
    $$.ajax({
      url: 'https://cristobalsguttierrez.000webhostapp.com/enviarCorreo.php',
      method: 'POST',
      dataType: 'json',
      data: {
        //nombreCliente: Nom,
        //apellidoCliente: Ape,
        //correo: Cor,
        //Rut: Rut,
        //HoI: HoI,
        asunto: asunto,
        sms, sms,
        idCancha: idCancha//Para obtener el correo del dueño
        //duracion: duracion,
        //fecha: fecha
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          console.log(data.datos.correo);
          myApp.alert("","Reserva realizada Con Exito");
          //myApp.alert("Registro Exitoso","Enhorabuena");
          //document.location = "index2.html";
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
/*

*/
