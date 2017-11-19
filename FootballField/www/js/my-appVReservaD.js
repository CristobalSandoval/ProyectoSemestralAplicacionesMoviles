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
  $$("#reserva").on("click", irARes);
  $$("#ver").on("click", verReservas);
  document.addEventListener("backbutton", volver, false);
}

var rutCliente;
var horaInicio;
var duracion;
var tHoras;

function verReservas() {

  console.log("verReservas");
  //var Rut = localStorage.getItem("usr");//= $$('#Rut').val();
  var idCancha = localStorage.getItem("idCancha");
  var fecha = $$('#fecha').val();
  if(fecha.length > 0){
    myApp.showPreloader("Cargando Informacion");
    $$.ajax({
      url: 'https://cristobalsguttierrez.000webhostapp.com/verReservaDueno.php',
      method: 'GET',
      dataType: 'json',
      data: {
      idCancha: idCancha,
      fecha: fecha
      },
      success: function(data){
        console.log("IZI");
        if(data.resp){
          myApp.hidePreloader();

          for (var i = 0; i < data.cantidad; i++) {
            rutCliente = data.datos[i].rutCliente;
            horaInicio = data.datos[i].hInicio;
            duracion = data.datos[i].cantHoras;
            tHoras = parseInt(horaInicio) + parseInt(duracion);

            text_html ='<li class="item-content">';
            text_html +='<div class="item-inner">';
            text_html +='<div class="item-title"><FONT COLOR="black">'+horaInicio+':00 - '+tHoras+':00</FONT></div>';
            text_html +='<p><FONT COLOR="black"></br>Reservado por: '+rutCliente+'</FONT></p>';
            text_html +='</div>';
            text_html +='</li>';
            $$('#containerReservas').append(text_html);

          }

          //--------- Es Solo De Prueba --------------------------//
          //localStorage.setItem("idCancha", data.datos.idCancha);//
          //------------------------------------------------------//
          }else{
            myApp.hidePreloader();
            myApp.alert("","No Hay Reservas");
          }
      },
      error: function(){
        myApp.hidePreloader();
        console.log("GG");
        myApp.alert("El WS no ha respondido","Error");
      }
    });
  }else {
    myApp.alert("","Debe Elegir Una Fecha");
  }
}



// PRUEBA
function agregarCancha(){
    text_html ='<li class="item-content">';
    text_html +='<div class="item-inner">';
    text_html +='<div class="item-title"><FONT COLOR="black">'+horaInicio+':00 - '+(horaInicio+duracion)+':00</FONT></div>';
    text_html +='<p></p>';
    text_html +='</div>';
    text_html +='</li>';

    $$('#containerReservas').append(text_html);
}


function volver(e){
 document.location="canchaDueno.html"
}

//solo por prueba
function volverCancha() {
  document.location="canchaDueno.html"
}

function irARes() {
  document.location="DReservaD.html"
}

/*

*/
