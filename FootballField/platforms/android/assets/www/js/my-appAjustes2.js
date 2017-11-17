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
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal);
  $$('#btnMiCancha').on('click', abrirMiCanchas);
  $$('#btnIngCanchas').on('click', ingresarCanchas);
  $$('#btnAjustes2').on('click', abrirAjustes);
  $$('#btnAyuda2').on('click', abrirAyuda);
  $$('#btnInfo2').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
  $$('#btnCambiarContraseña').on('click', cambiarPass);
  document.addEventListener("backbutton", volverPPrincipal, false);
}

function cambiarPass() {
  console.log("cambiar pass");
}

function volverPPrincipal(e){
   document.location="pPrincipal2.html"
}

function cambiarPass() {
  document.location="cPass2.html";
}

function ingresarCanchas() {
  document.location="ingresoCancha.html";
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="pPrincipal2.html"
}

function abrirMiCanchas() {
  myApp.showPreloader("Abriendo Canchas");
  document.location="canchaDueno.html"
}


function abrirAjustes() {
  myApp.closePanel("left");
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
  localStorage.clear();
  document.location="index.html"
}
