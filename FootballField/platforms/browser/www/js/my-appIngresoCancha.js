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
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal2);
  $$('#btnMiCancha').on('click', abrirMiCancha);
  $$('#btnAjustes2').on('click', abrirAjustes);
  $$('#btnAyuda2').on('click', abrirAyuda);
  $$('#btnInfo2').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
  $$('#borrar').on('click', borrarDatos);
  $$('#Enviar').on('click', enviarDatos);
  document.addEventListener("backbutton", onBackKeyDown, false);
}

function borrarDatos() {
  $$('#nombre').val(value = "");
  $$('#direccion').val(value = "");
  $$('#longitud').val(value = "");
  $$('#latitud').val(value = "");
  $$('#hora_a').val(value = "");
  $$('#hora_c').val(value = "");
  $$('#valor_hora').val(value = "");
  $$('#descripcion').val(value = "");
  $$('#rutD').val(value = "");
  $$('#idCancha').val(value = "");
}

function enviarDatos() {
  var Nom = $$('#nombre').val();
  var Dir = $$('#direccion').val();
  var Lon = $$('#longitud').val();
  var Lat = $$('#latitud').val();
  var HoA = $$('#hora_a').val();
  var HoC = $$('#hora_c').val();
  var Val = $$('#valor_hora').val();
  var Des = $$('#descripcion').val();
  var Run = localStorage.getItem("usr");//= $$('#rutD').val();
  var IdC = $$('#idCancha').val();

  myApp.showPreloader("Ingresando Datos");

  if(Nom.length > 0 && Dir.length > 0 && Lon.length > 0 && Lat.length > 0 && HoA.length > 0 && HoC.length > 0 && Val.length > 0  && Des.length > 0 && Run.length > 0 && IdC.length > 0){
    $$.ajax({
      url: 'https://cristobalsguttierrez.000webhostapp.com/ingresarCancha.php',
      method: 'POST',
      dataType: 'json',
      data: {
        nombre: Nom,
        descripcion: Des,
        longitud: Lon,
        latitud: Lat,
        direccion: Dir,
        hApertura: HoA,
        hClausura: HoC,
        valorHora: Val,
        idCancha: IdC,
        rutD: Run
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          myApp.showPreloader("Ingreso Exitoso");
          //myApp.alert("Registro Exitoso","Enhorabuena");
          document.location = "pPrincipal2.html";
          }else{
            myApp.alert(data.info,"No Se Puedo Realizar El Ingreso");
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



function onBackKeyDown(){
 navigator.notification.confirm("DESEA SALIR DEL INGRESO DE CANCHAS?", cerrarAPP,"ADVERTENCIA", "Si,No");
}

function cerrarAPP(e){
  if(e==1){
   document.location="pPrincipal2.html"
  }else{
    return;
  }
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal2() {
  document.location="pPrincipal2.html"
}

function abrirMiCancha() {
  myApp.showPreloader("Abriendo Canchas");
  document.location="canchaDueno.html"
}

function abrirAjustes() {
  myApp.showPreloader("Abriendo Ajustes");
  document.location="ajustes2.html"
}

function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda2.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info2.html"
}

function cerrarSesion() {
  myApp.showPreloader("Cerrando Sesión");
  //por ahora solo va al principio, despues hay que usar flag y token
  localStorage.clear();
  document.location="index.html"
}
