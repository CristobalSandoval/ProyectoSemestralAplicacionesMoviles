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
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal2);
  $$('#btnMiCancha').on('click', abrirMiCanchas);
  $$('#btnIngCanchas').on('click', ingresarCanchas);
  $$('#btnAjustes2').on('click', abrirAjustes);
  $$('#btnAyuda2').on('click', abrirAyuda);
  $$('#btnInfo2').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
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

function ingresarCanchas() {
  if (contador == 0) {
    document.location="ingresoCancha.html";
    contador++;
  }else {
    myApp.showPreloader("No Puede Ingresar Mas Canchas");
    myApp.closePanel("left");
  }
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal2() {
  myApp.closePanel("left");
}

function abrirMiCanchas() {
  myApp.showPreloader("Abriendo Mi Canchas");
  document.location="canchaDueño.html"
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
  localStorage.clear();
  document.location="login.html"
}
