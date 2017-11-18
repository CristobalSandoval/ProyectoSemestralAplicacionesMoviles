// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

//mapa
var la;
var lo;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal);
  $$('#btnMiCancha').on('click', abrirMiCancha);
  $$('#btnAjustes2').on('click', abrirAjustes);
  $$('#btnAyuda2').on('click', abrirAyuda);
  $$('#btnInfo2').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
  document.addEventListener("backbutton", volverPP, false);
}

//--------------------

function mostrarDatos() {
  console.log("click");
  var Rut = localStorage.getItem("usr");//= $$('#Rut').val();

  $$.ajax({
    url: 'https://cristobalsguttierrez.000webhostapp.com/miCancha.php',
    method: 'GET',
    dataType: 'json',
    data: {
    Rut: Rut
    },
    success: function(data){
      console.log("GG");
      if(data.resp){
        $$('#NombreCancha').html(data.datos.nombre);
        $$('#ValorHora').html(data.datos.valorHora);
        $$('#hAper').html(data.datos.hApertura);
        $$('#hClau').html(data.datos.hClausura);
        $$('#Direccion').html(data.datos.direccion);
        $$('#desc').html(data.datos.descripcion);
        lo = parseFloat(data.datos.longitud);
        la = parseFloat(data.datos.latitud);

        }else{
          myApp.alert("","Usted NO Tiene Una Cancha Registrada");
        }
    },
    error: function(){
      console.log(Rut);
      myApp.alert("El WS no ha respondido","Error");
    }
  });

}

//--------------------
function volverPP(e){
   document.location="pPrincipal2.html"
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda2.html"
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="pPrincipal2.html"
}

function abrirMiCancha() {
  myApp.closePanel("left");
}

function abrirAjustes() {
  myApp.showPreloader("Abriendo Ajustes");
  document.location="ajustes2.html"
}

function abrirAyuda() {
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

function initMap() {
  var uluru = {lat: -25.363, lng: -131.044};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    canter: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  idWatch = navigator.geolocation.watchPosition(onSuccess, onError, options);
}


function onSuccess(position) {

  //var pos = {lat: position.coords.latitude, lng: position.coords.longitude};

  var pos = {lat: la, lng: lo};
  map.setCenter(pos);
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

function onError(error) {
  console.log(error.code);
  console.log(error.message);
}

var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
