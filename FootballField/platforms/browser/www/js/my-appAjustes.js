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
  $$('#btnCanchas').on('click', abrirCanchas);
  $$('#btnPerfil').on('click', abrirPerfil);
  $$('#btnAjustes').on('click', abrirAjustes);
  $$('#btnAyuda').on('click', abrirAyuda);
  $$('#btnInfo').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="pPrincipal.html"
}

function abrirCanchas() {
  myApp.showPreloader("Abriendo Canchas");
  document.location="canchas.html"
}

function abrirPerfil() {
  myApp.showPreloader("Abriendo Perfil");
  document.location="perfil.html"
}

function abrirAjustes() {
  myApp.closePanel("left");
}

function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info.html"
}
