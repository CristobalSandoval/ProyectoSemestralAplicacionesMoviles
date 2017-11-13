// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

//mapa
var la = -36.6346462;
var lo = -72.0758378;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal);
  $$('#btnCanchas').on('click', abrirCanchas);
  $$('#btnAjustes').on('click', abrirAjustes);
  $$('#btnAyuda').on('click', abrirAyuda);
  $$('#btnInfo').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
  document.addEventListener("backbutton", volverCanchas, false);
}

function volverCanchas(e){
   document.location="canchas.html"
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda.html"
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="pPrincipal.html"
}

function abrirCanchas() {
  myApp.showPreloader("Abriendo Canchas");
  document.location="canchas.html"
}

function abrirAjustes() {
  myApp.showPreloader("Abriendo Ajustes");
  document.location="ajustes.html"
}

function abrirAyuda() {
  document.location="ayuda.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info.html"
}

function cerrarSesion() {
  myApp.showPreloader("Cerrando Sesión");
  //por ahora solo va al principio, despues hay que usar flag y token
  localStorage.clear();
  document.location="login.html"
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
