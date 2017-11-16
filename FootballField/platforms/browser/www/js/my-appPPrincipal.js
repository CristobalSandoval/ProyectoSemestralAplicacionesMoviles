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
  //$$('#btnAjustes').on('click', abrirAjustes);
  $$('#btnAyuda').on('click', abrirAyuda);
  $$('#btnInfo').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnLogin').on('click', Abrirlogin);
  $$('#btnSign').on('click', AbrirSign);
  document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(){
 navigator.notification.confirm("DESEA SALIR DE FOOTBALLFIELD?", cerrarAPP,"ADVERTENCIA", "Si,No");
}

function cerrarAPP(e){
  if(e==1){
   navigator.app.exitApp();
  }else{
    return;
  }
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.closePanel("left");
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
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info.html"
}

function Abrirlogin() {
  myApp.showPreloader("Abriendo Log In");
  document.location="login.html"
}

function AbrirSign() {
  myApp.showPreloader("Abriendo Sign In");
  document.location="signinD.html"
}

/*
function cerrarSesion() {
  myApp.showPreloader("Cerrando Sesión");
  //por ahora solo va al principio, despues hay que usar flag y token
  localStorage.clear();
  document.location="login.html"
}
*/
