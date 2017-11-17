// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;
var contador = 0;
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
  document.addEventListener("backbutton", volverPPrincipal, false);
}

function volverPPrincipal(e){
   document.location="pPrincipal2.html"
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
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
  myApp.closePanel("left");
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
